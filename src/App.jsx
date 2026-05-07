function App() {
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

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Polymorphic Agentic AI Marketing System
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            An interactive AI powered marketing operations dashboard for recruitment, delegation,
            branding, and business growth.
          </p>
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

              <button className="mt-6 w-full bg-white text-black font-semibold py-3 rounded-2xl hover:scale-105 transition-all duration-300">
                Launch Module
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">AI Workflow Simulation</h2>

          <div className="grid md:grid-cols-5 gap-4 mt-8">
            {[
              'Upload Podcast Script',
              'Generate Multi Platform Content',
              'Create Graphics Concepts',
              'Schedule Content',
              'Analyze Performance',
            ].map((step, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-700 rounded-2xl p-4 text-center"
              >
                <div className="text-3xl font-bold mb-3 text-gray-500">
                  0{index + 1}
                </div>
                <p className="text-sm text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Suggested Integrations</h2>

            <div className="space-y-4 mt-6">
              {[
                'OpenAI API',
                'Make.com',
                'n8n',
                'Google Sheets',
                'Meta Scheduler',
                'LinkedIn API',
                'TikTok Workflow',
                'YouTube Automation',
              ].map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-black border border-zinc-700 rounded-2xl px-4 py-3"
                >
                  <span>{tool}</span>
                  <span className="text-green-400 text-sm">Ready</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">Business Goals</h2>

            <div className="space-y-4 mt-6">
              {[
                'Increase inbound business owner leads',
                'Improve recruitment authority branding',
                'Automate repetitive marketing tasks',
                'Scale Delegation Desk Show visibility',
                'Build operational thought leadership',
                'Generate consistent daily content',
              ].map((goal, index) => (
                <div
                  key={index}
                  className="bg-black border border-zinc-700 rounded-2xl px-4 py-4"
                >
                  <div className="flex items-center justify-between">
                    <span>{goal}</span>
                    <span className="text-xs text-gray-500">ACTIVE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
            Initialize AI Marketing Operations
          </button>
        </div>
      </div>
    </div>
  );
}
export default App