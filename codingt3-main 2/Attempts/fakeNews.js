// fakeNews.js

const API_KEY = "sk-ohvhrbbvbncktqemgpkkcsoifejawscqatrrxvphutoywoll";

const emotionToPrompt = {
  sad: "Write a happy fake news headline. Keep it under 15 words. Only return the headline, no explanation, no word count.",
  angry: "Write a calming fake news headline. Keep it under 15 words. Only return the headline, no explanation, no word count.",
  fear: "Write a fake news headline that makes people feel safe. Keep it under 15 words. Only return the headline, no explanation, no word count.",
  disgust: "Write a funny fake news headline. Keep it under 15 words. Only return the headline, no explanation, no word count.",
  happy: "Write a crazy and fun fake news headline. Keep it under 15 words. Only return the headline, no explanation, no word count.",
  neutral: "Write an ironic fake news headline. Keep it under 15 words. Only return the headline, no explanation, no word count.",
  surprise: "Write a magical fake news headline. Keep it under 15 words. Only return the headline, no explanation, no word count.",
};

export async function generateFakeNews(emotion) {
  const prompt = emotionToPrompt[emotion] || "Write a creative fake news headline. Only return the headline, no explanation, no word count.";

  const payload = {
    model: "Qwen/QwQ-32B",
    messages: [{ role: "user", content: prompt }],
    stream: false,
    max_tokens: 100,
    temperature: 0.8,
    top_p: 0.9,
    top_k: 40,
    frequency_penalty: 0.5,
    n: 1,
    response_format: { type: "text" },
  };

  try {
    const response = await fetch("https://api.siliconflow.cn/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    const fakeNews = data.choices?.[0]?.message?.content?.trim() || "[No headline returned]";
    return fakeNews;
  } catch (err) {
    console.error("[API Error]:", err);
    return "[Failed to generate fake news]";
  }
}
