// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-llm-inference-optimization-routing-quantization-amp-system-acceleration",
        
          title: "LLM Inference Optimization: Routing, Quantization &amp; System Acceleration",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/llm-inference-optimization/";
          
        },
      },{id: "post-openai-o1-amp-o3-the-rise-of-reasoning-models",
        
          title: "OpenAI o1 &amp; o3: The Rise of Reasoning Models",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/openai-o1-o3-reasoning/";
          
        },
      },{id: "post-deepmind-39-s-mind-evolution-scaling-llm-inference-with-evolutionary-search",
        
          title: "DeepMind&#39;s Mind Evolution: Scaling LLM Inference with Evolutionary Search",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/deepmind-mind-evolution/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-the-personal-homepage-has-officially-been-launched",
          title: 'The personal homepage has officially been launched.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%61%6F%79%68@%6E%75%64%74.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=zo6xp3kAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
