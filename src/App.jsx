import { useState } from 'react';

export default function PolymorphicMarketingAI() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedModule, setSelectedModule] = useState('Copywriter');

  const modules = [
    {
      title: 'Content Strategist',
      description:
        'Generate monthly content calendars, campaign themes, and SEO focused content strategies for recruitment and delegation marketing.',
      features: ['Monthly Planning', 'SEO Optimization', 'Campaign Themes', 'Trend Targeting'],
    },
    {
      title: 'Copywriter',
      description:
        'Create platform specific content for TikTok, LinkedIn, Facebook, Instagram, X, and YouTube.',
      features: ['Captions', 'Hooks', 'CTAs', 'Scripts'],
    },
    {
      title: 'Creative Director',
      description:
        'Develop visual concepts, thumbnails, reel ideas, caricature campaigns, and branding directions.',
      features: ['Ad Concepts', 'Thumbnail Ideas', 'Visual Branding', 'Reel Concepts'],
    },
    {
      title: 'Trend Analyst',
      description:
        'Analyze trending business owner pain points and suggest viral recruitment and delegation content angles.',
      features: ['Trend Research', 'Competitor Analysis', 'Viral Hooks', 'Hashtag Suggestions'],
    },
    {
      title: 'Campaign Architect',
      description:
        'Structure lead generation funnels and authority positioning campaigns.',
      features: ['Funnels', 'Lead Magnets', 'Authority Positioning', 'Conversion Strategy'],
    },
    {
      title: 'Automation Brain',
      description:
        'Map AI powered workflows for automated content generation and scheduling.',
      features: ['Workflow Design', 'Automation Ideas', 'Content Pipelines', 'Scaling Systems'],
    },
  ];

  const generateContent = async () => {
    if (!prompt) return;

    setLoading(true);
    setOutput('Generating AI content...');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          module: selectedModule,
        }),
      });

      const data = await response.json();

      console.log('API RESPONSE:', data);

      if (!response.ok) {
        setOutput(`Error: ${data.error || 'Failed to generate content.'}`);
      } else {
        setOutput(data.result || 'No output generated.');
      }
    } catch (error) {
      console.error(error);
      setOutput(`Connection Error: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Polymorphic Agentic AI Marketing System
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Interactive AI powered marketing operations dashboard for recruitment,
            delegation, branding, and business growth.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-6">AI Content Generator</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-3 text-sm text-gray-400">
                Select AI Module
              </label>

              <select
                value={selectedModule}
                onChange={(e) => setSelectedModule(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-2xl p-4 text-white"
              >
                {modules.map((module, index) => (
                  <option key={index}>{module.title}</option>
                ))}
              </select>

              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: Create a TikTok recruitment caption for Executive Assistants targeting US business owners."
                className="w-full h-48 mt-6 bg-black border border-zinc-700 rounded-2xl p-4 text-white resize-none"
              />

              <button
                onClick={generateContent}
                className="mt-6 w-full bg-white text-black font-bold py-4 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                {loading ? 'Generating...' : 'Generate AI Content'}
              </button>
            </div>

            <div className="bg-black border border-zinc-700 rounded-2xl p-6 overflow-auto">
              <h3 className="text-xl font-semibold mb-4">AI Output</h3>

              <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {output || 'Generated captions, hashtags, scripts, image ideas, and campaigns will appear here.'}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-white transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">{module.title}</h2>
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {module.description}
              </p>

              <div className="space-y-3">
                {module.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="bg-zinc-800 rounded-2xl px-4 py-3 text-sm"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedModule(module.title)}
                className="mt-6 w-full bg-white text-black font-semibold py-3 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                Launch Module
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
