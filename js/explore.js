// Complete AI Tools Explore JS - Large curated list (Writing, Video Editing, Audio Cloning, Trending, Most Useful)

const aiTools = [
  // ---------- WRITING ----------
  {name: "ChatGPT", category: "Writing", desc: "AI chat assistant for writing, coding and research.", desc2: "Generative text, conversation, code help, prompt-driven content and assistants.", pricing: "Free + Paid", link: "https://chat.openai.com/"},
  {name: "Claude (Anthropic)", category: "Writing", desc: "AI assistant focused on safe helpfulness.", desc2: "Long-form writing, summarization, instruction following and reasoning.", pricing: "Free + Paid", link: "https://www.anthropic.com/"},
  {name: "Google Gemini", category: "Writing", desc: "Google's multimodal conversational AI.", desc2: "Text + image understanding, long-form composition and code assistance.", pricing: "Free + Paid", link: "https://gemini.google.com/"},
  {name: "Perplexity", category: "Writing", desc: "AI research assistant & Q&A.", desc2: "Cites sources, great for factual lookups and concise answers.", pricing: "Freemium", link: "https://www.perplexity.ai/"},
  {name: "Grammarly", category: "Writing", desc: "Writing assistant and grammar checker.", desc2: "Tone adjustment, clarity, plagiarism checks and generative rewrites.", pricing: "Freemium", link: "https://www.grammarly.com/"},
  {name: "Jasper", category: "Writing", desc: "AI copywriting assistant.", desc2: "Marketing copy, blogs, ad copy and long-form templates.", pricing: "Paid", link: "https://www.jasper.ai/"},
  {name: "Writesonic", category: "Writing", desc: "AI writing & content generation.", desc2: "Blog posts, product descriptions and landing page copy with templates.", pricing: "Freemium", link: "https://writesonic.com/"},
  {name: "Copy.ai", category: "Writing", desc: "AI tool for marketing copy.", desc2: "Quick social captions, emails and ad copy generation.", pricing: "Freemium", link: "https://www.copy.ai/"},
  {name: "Rytr", category: "Writing", desc: "Affordable AI writing assistant.", desc2: "Short-form and long-form templates, multilingual support.", pricing: "Freemium", link: "https://rytr.me/"},
  {name: "Frase", category: "Writing", desc: "SEO-focused content writer.", desc2: "Content briefs, topic research and optimization for search.", pricing: "Paid", link: "https://www.frase.io/"},
  {name: "SurferSEO", category: "Writing", desc: "SEO content optimization.", desc2: "Integrates with generative tools for on-page SEO guidance.", pricing: "Paid", link: "https://surferseo.com/"},
  {name: "Anyword", category: "Writing", desc: "Data-driven marketing copy.", desc2: "Predicts performance of copy for ads and email.", pricing: "Paid", link: "https://anyword.com/"},
  {name: "Notion AI", category: "Writing", desc: "Writing & note assistant inside Notion.", desc2: "Summaries, rewrite, templates and knowledge management.", pricing: "Paid", link: "https://www.notion.so/"},
  {name: "QuillBot", category: "Writing", desc: "Paraphrasing and summarization.", desc2: "Rewrite sentences, summarise articles and check grammar.", pricing: "Freemium", link: "https://quillbot.com/"},
  {name: "WordTune", category: "Writing", desc: "Rewrite and rephrase assistant.", desc2: "Tone, shorten/expand and clarity improvements.", pricing: "Freemium", link: "https://www.wordtune.com/"},
  {name: "CopySmith", category: "Writing", desc: "Ecommerce & marketing copy tool.", desc2: "Product descriptions, bulk generation and integrations.", pricing: "Paid", link: "https://copysmith.ai/"},
  {name: "Peppertype", category: "Writing", desc: "Content generation for marketers.", desc2: "Templates for blogs, ads and social media.", pricing: "Paid", link: "https://www.peppertype.ai/"},
  {name: "Writesonic Chat", category: "Writing", desc: "Conversational content assistant.", desc2: "Integrates with other Writesonic features for content workflows.", pricing: "Freemium", link: "https://writesonic.com/"},

  // ---------- VIDEO EDITING / CREATION ----------
  {name: "Runway ML", category: "Video Editing", desc: "AI-powered video editor and generator.", desc2: "Text-to-video, background removal, inpainting, motion tracking and generative tools.", pricing: "Freemium", link: "https://runwayml.com/"},
  {name: "Descript", category: "Video Editing", desc: "Transcript-first video & audio editor.", desc2: "Edit video by editing text, Overdub voice cloning, remove filler words and auto captions.", pricing: "Freemium", link: "https://www.descript.com/"},
  {name: "CapCut", category: "Video Editing", desc: "Short-form focused editor with AI.", desc2: "Auto captions, templates, smart cuts and effects for social platforms.", pricing: "Freemium", link: "https://www.capcut.com/"},
  {name: "Veed.io", category: "Video Editing", desc: "Online video editor with AI features.", desc2: "Auto subtitles, translations, text-to-speech and simple editing workflow.", pricing: "Freemium", link: "https://www.veed.io/"},
  {name: "Pictory", category: "Video Editing", desc: "Text-to-video and repurposing tool.", desc2: "Convert blog posts/scripts into videos with B-roll and voiceovers.", pricing: "Freemium", link: "https://pictory.ai/"},
  {name: "Lumen5", category: "Video Editing", desc: "Create social videos from text.", desc2: "Auto‑match visuals and music to scripts and blog posts.", pricing: "Freemium", link: "https://lumen5.com/"},
  {name: "InVideo", category: "Video Editing", desc: "Template-first video maker.", desc2: "Many templates, auto captions and script-to-video features.", pricing: "Freemium", link: "https://invideo.io/"},
  {name: "Synthesia", category: "Video Editing", desc: "AI avatars & text-to-video.", desc2: "Create videos with realistic avatars and multi-language voices for training and marketing.", pricing: "Paid", link: "https://www.synthesia.io/"},
  {name: "HeyGen", category: "Video Editing", desc: "AI presenter & avatar videos.", desc2: "Text-to-video presenter avatars with localization.", pricing: "Paid", link: "https://www.heygen.com/"},
  {name: "Kaiber", category: "Video Editing", desc: "AI music + image to animated video.", desc2: "Generate stylized animated clips from prompts and audio.", pricing: "Freemium", link: "https://kaiber.ai/"},
  {name: "Colossyan", category: "Video Editing", desc: "Script-to-video with avatars.", desc2: "Automated avatar videos for e-learning and marketing.", pricing: "Paid", link: "https://www.colossyan.com/"},
  {name: "Elai.io", category: "Video Editing", desc: "Create videos from text with AI presenters.", desc2: "Scale video production using virtual presenters and voice options.", pricing: "Freemium", link: "https://elai.io/"},
  {name: "Clipchamp", category: "Video Editing", desc: "Web-based editor with AI tools.", desc2: "Quick edits, templates, auto-captions and stock library.", pricing: "Freemium", link: "https://www.clipchamp.com/"},
  {name: "Magisto", category: "Video Editing", desc: "AI-driven automated editing.", desc2: "Auto-selects highlights and applies templates and music.", pricing: "Freemium", link: "https://www.magisto.com/"},
  {name: "Vizard", category: "Video Editing", desc: "AI video editor focused on creators.", desc2: "Repurposing long video into shorts, auto captions and brand templates.", pricing: "Paid", link: "https://vizard.ai/"},
  {name: "Topaz Video AI", category: "Video Editing", desc: "Video upscaling and restoration.", desc2: "Frame interpolation, noise reduction and high-quality upscaling for footage.", pricing: "Paid", link: "https://www.topazlabs.com/video-enhance-ai"},
  {name: "Adobe Premiere Pro (Sensei)", category: "Video Editing", desc: "Professional NLE with AI features.", desc2: "Auto-reframe, scene edit detection, color match and generative fill extensions.", pricing: "Paid", link: "https://www.adobe.com/products/premiere.html"},
  {name: "DaVinci Resolve (Neural Engine)", category: "Video Editing", desc: "Pro editing & color grading with AI tools.", desc2: "Face recognition, smart reframing, and super scale in Studio edition.", pricing: "Free + Paid Studio", link: "https://www.blackmagicdesign.com/products/davinciresolve/"},
  {name: "Wondershare Filmora", category: "Video Editing", desc: "Beginner-friendly editor with AI assists.", desc2: "Auto highlight, scene detection and templates for quick edits.", pricing: "Paid", link: "https://filmora.wondershare.com/"},
  {name: "HitFilm / FXhome", category: "Video Editing", desc: "Editing + VFX with smart tools.", desc2: "Compositing, effects and AI-powered lenses/filters.", pricing: "Paid", link: "https://fxhome.com/"},
  {name: "Final Cut Pro (Apple)", category: "Video Editing", desc: "Mac-focused pro editor with machine learning features.", desc2: "Smart conform, noise reduction and accelerated performance.", pricing: "Paid", link: "https://www.apple.com/final-cut-pro/"},

  // ---------- AUDIO / VOICE / MUSIC ----------
  {name: "ElevenLabs", category: "Audio Cloning", desc: "High-quality text-to-speech & voice cloning.", desc2: "Create natural voices, voice cloning and audiobook narration.", pricing: "Paid + Free trial", link: "https://elevenlabs.io/"},
  {name: "Murf.ai", category: "Audio Cloning", desc: "Text-to-speech & voice-over maker.", desc2: "Studio-style voices, team workflows and custom voice creation.", pricing: "Paid", link: "https://murf.ai/"},
  {name: "Resemble AI", category: "Audio Cloning", desc: "Voice cloning and dynamic TTS.", desc2: "Realistic voice cloning with real-time API options.", pricing: "Paid", link: "https://www.resemble.ai/"},
  {name: "Play.ht", category: "Audio Cloning", desc: "AI voices and TTS platform.", desc2: "Audio generation, podcasting and multi-voice features.", pricing: "Freemium", link: "https://play.ht/"},
  {name: "Descript (Overdub)", category: "Audio Cloning", desc: "Audio & video with voice cloning.", desc2: "Overdub clones voice and allows edit-by-text for audio tracks.", pricing: "Freemium", link: "https://www.descript.com/"},
  {name: "Respeecher", category: "Audio Cloning", desc: "High-quality voice cloning for media.", desc2: "Used in film, games and commercials for voice transfer.", pricing: "Paid", link: "https://www.respeecher.com/"},
  {name: "Replica Studios", category: "Audio Cloning", desc: "AI voices for games & animation.", desc2: "Emotion-aware TTS tuned for characters and interactive media.", pricing: "Paid", link: "https://replicastudios.com/"},
  {name: "Voicemod", category: "Audio", desc: "Real-time voice changer.", desc2: "Live voice modulation for streaming and communication.", pricing: "Freemium", link: "https://www.voicemod.net/"},
  {name: "iZotope RX (AI tools)", category: "Audio", desc: "Professional audio repair with ML.", desc2: "Noise reduction, de-reverb and spectral repair with AI modules.", pricing: "Paid", link: "https://www.izotope.com/"},
  {name: "LALAL.ai", category: "Audio", desc: "Stem splitting & vocal isolation using AI.", desc2: "Separate vocals and instruments quickly with high quality.", pricing: "Freemium", link: "https://www.lalal.ai/"},
  {name: "Suno AI", category: "Music", desc: "AI music generation.", desc2: "Create songs, beats and stems using generative models.", pricing: "Freemium", link: "https://www.suno.ai/"},
  {name: "AIVA", category: "Music", desc: "Generative music composer.", desc2: "Compose soundtracks for videos, games and ads.", pricing: "Paid", link: "https://www.aiva.ai/"},

  // ---------- IMAGE / DESIGN / TRENDING ----------
  {name: "Midjourney", category: "Trending", desc: "Text-to-image generator.", desc2: "Creative, stylized and cinematic image generation via prompts.", pricing: "Paid", link: "https://www.midjourney.com/"},
  {name: "DALL·E (OpenAI)", category: "Trending", desc: "Generative image model.", desc2: "Text-to-image generation with inpainting and edit tools.", pricing: "Freemium", link: "https://labs.openai.com/"},
  {name: "Stable Diffusion (SD)", category: "Trending", desc: "Open-source image generation.", desc2: "Community models, local runs and many frontends for creative control.", pricing: "Free / Open-source", link: "https://stability.ai/"},
  {name: "Adobe Firefly", category: "Trending", desc: "Creative generative image tools.", desc2: "Text-to-image, generative fill and design assets integrated in Adobe apps.", pricing: "Paid", link: "https://www.adobe.com/sensei/generative-ai/firefly.html"},
  {name: "Canva AI", category: "Most Useful", desc: "All-in-one design platform with AI.", desc2: "Templates, text-to-image, background remover and quick video tools.", pricing: "Freemium", link: "https://www.canva.com/"},
  {name: "Runway (image)", category: "Trending", desc: "Image & video generative tools.", desc2: "Integrated Gen models that work across photo and video editing.", pricing: "Freemium", link: "https://runwayml.com/"},

  // ---------- PRODUCTIVITY / AUTOMATION / API ----------
  {name: "Zapier AI / Automation", category: "Most Useful", desc: "Automate workflows with AI triggers.", desc2: "Connects hundreds of apps; includes AI actions and agents.", pricing: "Freemium", link: "https://zapier.com/"},
  {name: "Make (Integromat)", category: "Most Useful", desc: "Visual automation builder.", desc2: "Automate multi-step workflows with app connectors and AI modules.", pricing: "Freemium", link: "https://www.make.com/"},
  {name: "Hugging Face", category: "Most Useful", desc: "Model hub and APIs.", desc2: "Access to open models for text, image, audio and video; great for prototyping.", pricing: "Freemium", link: "https://huggingface.co/"},
  {name: "OpenAI API", category: "Most Useful", desc: "APIs for GPT, image and multimodal models.", desc2: "Integrate chat, completions, embeddings and image gen into apps.", pricing: "Paid", link: "https://platform.openai.com/"},

  // ---------- DIRECTORIES & RESOURCES (useful to pull more tools) ----------
  {name: "Futurepedia", category: "Resources", desc: "Large AI tools directory.", desc2: "Searchable directory across many categories to discover tools.", pricing: "Free", link: "https://www.futurepedia.io/"},
  {name: "AI Tools Directory", category: "Resources", desc: "Curated AI tools list.", desc2: "Organized categories and reviews for many AI products.", pricing: "Free", link: "https://aitoolsdirectory.com/"},
  {name: "Insidr.ai (500+)", category: "Resources", desc: "500+ AI tools directory.", desc2: "Compare tools across categories and filter by use case.", pricing: "Free", link: "https://www.insidr.ai/"},
  {name: "AI Tools (Aitools.co / Future tools)", category: "Resources", desc: "Multiple searchable AI directories.", desc2: "Good for bulk discovery when building your database.", pricing: "Free", link: "https://www.aitools.co/"},

  // ---------- ADDITIONAL POPULAR & NICHE TOOLS (quick list to expand) ----------
  {name: "Hugging Face Spaces", category: "Trending", desc: "Community demos & apps.", desc2: "Run and explore small AI apps for image, audio, video and text.", pricing: "Free", link: "https://huggingface.co/spaces"},
  {name: "Perplexity", category: "Writing", desc: "Answer engine with citations.", desc2: "Quick factual answers with source links.", pricing: "Freemium", link: "https://www.perplexity.ai/"},
  {name: "Sora", category: "Video Editing", desc: "Text-to-video and editor tools (emerging)", desc2: "Fast storyboard-driven video generation." , pricing: "Freemium", link: "https://sora.com/"},
  {name: "Veo (Veo 3)", category: "Video Editing", desc: "Next-gen video generator (example)", desc2: "High-quality cinematic text-to-video generation.", pricing: "Paid", link: "https://example.com/"},
  {name: "FlexClip", category: "Video Editing", desc: "Easy online video maker.", desc2: "Templates, stock media and simple AI features.", pricing: "Freemium", link: "https://www.flexclip.com/"},
  {name: "Raw Shorts", category: "Video Editing", desc: "AI explainer video maker.", desc2: "Script-to-video for marketing and explainer content.", pricing: "Paid", link: "https://www.rawshorts.com/"},
  {name: "Predis.ai", category: "Social Video", desc: "Social content generator.", desc2: "Repurposes long-form to social clips with captions and formats.", pricing: "Paid", link: "https://predis.ai/"},
  {name: "GliaCloud", category: "Video AI", desc: "Automated captioning & clipping.", desc2: "Enterprise tools for media companies to repurpose content.", pricing: "Paid", link: "https://www.gliacloud.com/"},

  // ---------- PLACEHOLDER: Use directories to expand to 500+ ----------
  // NOTE: For scaling to 500+ entries, use the directories above (Futurepedia, Insidr.ai, AIToolsDirectory,
  // Hugging Face Spaces, and curated lists from DemandSage / Zapier / TechRadar).

];

// -------------- UI & RENDERING --------------
const aiGrid = document.getElementById("aiGrid");
const searchInput = document.getElementById("aiSearch");
const categoryTabs = document.querySelectorAll("#categoryTabs .nav-link");

function renderTools(filterCategory = "All", searchTerm = "") {
  aiGrid.innerHTML = "";

  const filtered = aiTools.filter(tool =>
    (filterCategory === "All" || tool.category === filterCategory) &&
    (tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     (tool.desc && tool.desc.toLowerCase().includes(searchTerm.toLowerCase())) ||
     (tool.desc2 && tool.desc2.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  if (filtered.length === 0) {
    aiGrid.innerHTML = `<p class="text-muted mt-3">No AI tools found.</p>`;
    return;
  }

  filtered.forEach(tool => {
    aiGrid.insertAdjacentHTML("beforeend", `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div class="ai-card">
          <h5>${tool.name}</h5>
          <p class="mb-1">${tool.desc || ''}</p>
          <p class="text-secondary small mb-2">${tool.desc2 || ''}</p>
          <p class="mb-2"><strong>${tool.pricing || ''}</strong></p>
          <div class="d-flex gap-2">
            <a href="${tool.link}" target="_blank" class="btn visit-btn flex justify-center mx-auto">Visit</a>
            
          </div>
        </div>
      </div>
    `);
  });
}

renderTools();

// Category Filter
categoryTabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    const active = document.querySelector('#categoryTabs .active');
    if (active) active.classList.remove('active');
    tab.classList.add("active");
    renderTools(tab.dataset.category, searchInput.value);
  });
});

// Search Filter
searchInput.addEventListener("input", () => {
  const activeCategory = document.querySelector("#categoryTabs .active")?.dataset.category || 'All';
  renderTools(activeCategory, searchInput.value);
});

// Add button demo (you said you'll select one-by-one)
aiGrid.addEventListener('click', e => {
  if (e.target.matches('.btn-add')) {
    const name = e.target.dataset.name;
    alert(`${name} selected`);
  }
});

// Helper: function to bulk import more tools (example uses directories)
async function bulkImportFromDirectory(apiUrl) {
  // Placeholder: implement fetching/parsing from directory APIs or JSON exports.
  // Many directories provide CSV/JSON exports or pages that can be scraped server-side.
  console.warn('bulkImportFromDirectory is a placeholder. Use server-side scripts to fetch and parse large lists.');
}

// Export module (if using bundler)
if (typeof module !== 'undefined') module.exports = { aiTools, renderTools };
