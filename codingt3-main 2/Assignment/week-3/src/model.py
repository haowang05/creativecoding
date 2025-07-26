# Borrowed some comments from Terry's notebook to explain the layers
# https://git.arts.ac.uk/tbroad/AI-4-Media-23-24/blob/main/Week-3-CNNs-and-image-classification/train-image-classifier-from-scratch.ipynb 

from torch import nn, flatten
from torch.nn.functional import relu
from torch import sigmoid
#  This is a CNN based classifier
#  This model setup convolutional layers according to the input image resolution
#  Input size will be reduced by half after each MaxPooling layer, until it reach the bottleneck (4x4 or 3x3)

class ConvNeuralNetwork(nn.Module):
    # Constructor for this module
    def __init__(self, 
                 img_channel, # number of colour channels
                 img_resolution, # resolution of input images
                 num_classes, # number of class
                 c_base = 8, # how many conv channels in the first conv layer?
                 c_max = 32, # maximum number of conv channels.
                 layer_max = 10, # maximum number of layers.
                 kernel_size = 3, # the convolutional kernel size, 3x3 is suggested
                ):
        # Call the constructor of the base class nn.module
        super().__init__()
        
        assert kernel_size % 2 == 1, "please use odd number for kernel_size"

        self.img_resolution = img_resolution
        self.img_channel = img_channel
        self.num_classes = num_classes
        
        modules = []
        
        for n in range(layer_max):
            in_channel = img_channel if n == 0 else out_channel
            out_channel = c_base if n == 0 else out_channel * 2
            out_channel = min(out_channel, c_max)
            
            # each convolutional layer will takes a batch of 3D tensor 
            # Outputs a batch of 3D tensor (outputs of all convolutional filters)
            # by default, the convolutional kernel size is 3x3, 
            # with padding = 1 to keep inputs and outputs size the same
            modules.append(nn.Conv2d(in_channel, out_channel, kernel_size, padding=kernel_size//2))
            
            # Each conv layer will be followed by a Max-pooling function 
            # it reduce widths and heights of the inputs in half (e.g. [64, 28, 28] -> [64, 14, 14])
            modules.append(nn.MaxPool2d(2, 2))
            
            # Then followed by an relu activation function
            modules.append(nn.ReLU())
            
            # Calculate the width/ height of outputs
            img_resolution = img_resolution // 2
            
            # if the image has been reduce to a very small size, we won't need anymore convlutional layers
            if img_resolution <= 4:
                break
            
        self.convolutions = nn.ModuleList(modules)
        
        # First fully connected layer
        # Its input size depend on the convolutional layer's output resolution and the number of channels
        self.fc1 = nn.Linear(out_channel * img_resolution * img_resolution, c_max)
        
        # Second fully connected layer
        self.fc2 = nn.Linear(c_max, c_max)
        
        # Last fully connected layer
        # Outputs a vector of class predictions
        self.fc3 = nn.Linear(c_max, num_classes)
        

    # Definition of the forward pass
    # Here the classifier takes an image as input and predicts an vector of probabilites
    def forward(self, x):

        # check input shape
        assert x.dim() == 4, f"x has incorrect dimension, expect 4 dimensions, got {x.shape}"
        assert x.shape[1] == self.img_channel, f"x has incorrect shape at axis 1, expect {self.img_channel}, got {x.shape}"
        assert x.shape[2] == self.img_resolution, f"x has incorrect shape at axis 2, expect {self.img_resolution}, got {x.shape}"
        assert x.shape[3] == self.img_resolution, f"x has incorrect shape at axis 3, expect {self.img_resolution}, got {x.shape}"
        
        # Pass input through all layers we have added
        for layer in self.convolutions:
            x = layer(x)
            
        # Flatten the output of the last convolutional layer into a 1-dimensional vector
        x = flatten(x, 1) 
        
        # Pass through the first and the second fully connected layer with relu activation function
        x = relu(self.fc1(x)) 
        x = relu(self.fc2(x))
        
        # Pass through the last fully connected layer (no activation function needed here)
        x = self.fc3(x)
        
        # Output a vector of class probabilities
        return x
    
    
    
class DenseNeuralNetwork(nn.Module):
    # Constructor for this module
    def __init__(self, 
                 num_features, # number of input channels
                 layer_max = 1, # maximum number of layers.
                 c_max = 32, # maximum number of conv channels.
                 num_classes = 1
                ):
        # Call the constructor of the base class nn.module
        super().__init__()

        self.num_features = num_features
        self.num_classes = num_classes
        
        modules = []
        
        for n in range(layer_max):
            in_channel = num_features if n == 0 else c_max
            
            #
            modules.append(nn.Linear(in_channel, c_max))

            # Then followed by an relu activation function
            modules.append(nn.Sigmoid())
            
        self.dense = nn.ModuleList(modules)

        # Last fully connected layer
        # Outputs a vector of class predictions
        self.fc = nn.Linear(c_max, num_classes)
        

    # Definition of the forward pass
    # Here the classifier takes an image as input and predicts an vector of probabilites
    def forward(self, x):

        # check input shape
        assert x.dim() == 2, f"x has incorrect dimension, expect 2 dimensions, got {x.shape}"
        assert x.shape[1] == self.num_features, f"x has incorrect shape at axis 1, expect {self.num_features}, got {x.shape}"
        
        # Pass input through all layers we have added
        for layer in self.dense:
            x = layer(x)
            
        # Pass through the last fully connected layer
        x = sigmoid(self.fc(x))
        
        # Output a vector of class probabilities
        return x
    