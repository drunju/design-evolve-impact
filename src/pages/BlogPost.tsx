
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Reuse the blog posts data from Blog.tsx
// In a real application, this would be fetched from an API
const blogPosts = [
  {
    id: 'principles-of-human-centered-design',
    title: 'Core Principles of Human-Centered Design',
    excerpt: 'Explore the fundamental principles that make Human-Centered Design an effective approach for solving complex problems and creating meaningful solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop',
    date: 'May 10, 2025',
    readTime: '7',
    content: `
      <h2>Core Principles of Human-Centered Design</h2>
      
      <p>Human-Centered Design (HCD) has emerged as one of the most effective methodologies for solving complex challenges in today's rapidly changing world. At its core, HCD is about putting people first—understanding their needs, aspirations, and contexts before developing solutions.</p>
      
      <h3>Empathy: The Foundation</h3>
      
      <p>The HCD process begins with developing deep empathy for the people you're designing for. This means suspending your own assumptions and truly understanding the experiences, challenges, and perspectives of your users. Empathy is not just about conducting interviews; it's about immersing yourself in the users' world to discover insights that surveys and data alone cannot reveal.</p>
      
      <h3>Co-creation: Designing With, Not For</h3>
      
      <p>True human-centered design involves the end-users as active participants throughout the design process. This collaborative approach ensures that solutions are relevant, appropriate, and sustainable. When people are involved in creating solutions, they're more likely to embrace and champion them.</p>
      
      <h3>Iteration: Learning Through Doing</h3>
      
      <p>HCD embraces a mindset of experimentation and learning. Rather than attempting to get everything perfect on the first try, the process encourages rapid prototyping, testing, and refining. Each iteration brings us closer to more effective solutions while minimizing the risk of large-scale failure.</p>
      
      <h3>Holistic Perspective: Understanding the System</h3>
      
      <p>Effective human-centered design considers the entire ecosystem surrounding a challenge. This means looking beyond immediate users to understand stakeholders, environments, cultural contexts, and systems that influence how solutions will be implemented and sustained.</p>
      
      <h3>Impact-Driven: Measuring What Matters</h3>
      
      <p>The ultimate measure of success in HCD is not aesthetic appeal or technological sophistication but meaningful impact on people's lives. This requires establishing clear metrics for success that relate directly to human outcomes and continuously evaluating whether solutions are creating the intended value.</p>
    `
  },
  {
    id: 'from-insights-to-innovation',
    title: 'From Insights to Innovation: The HCD Journey',
    excerpt: 'Discover how organizations transform user insights into groundbreaking innovations through the structured yet flexible Human-Centered Design process.',
    imageUrl: 'https://images.unsplash.com/photo-1564144006388-615f4f4abb6e?q=80&w=2071&auto=format&fit=crop',
    date: 'April 22, 2025',
    readTime: '8',
    content: `
      <h2>From Insights to Innovation: The HCD Journey</h2>
      
      <p>The journey from identifying a challenge to implementing a human-centered solution is neither linear nor predictable. However, understanding the fundamental phases of this journey can help teams navigate complexity with greater confidence and effectiveness.</p>
      
      <h3>Discovery: Unearthing Hidden Needs</h3>
      
      <p>Innovation begins with discovery—immersing yourself in the context of the challenge and connecting with the people experiencing it. This phase involves field research, interviews, observation, and participatory exercises to uncover insights that go beyond surface-level needs to reveal underlying motivations and barriers.</p>
      
      <h3>Definition: Framing the Right Problem</h3>
      
      <p>With insights in hand, teams synthesize what they've learned to define the core problem they're solving. This critical step often involves reframing the initial challenge based on new understanding. A well-defined problem statement serves as both a constraint and an inspiration for the creative process that follows.</p>
      
      <h3>Ideation: Generating Possibilities</h3>
      
      <p>Armed with a clear problem definition, teams engage in structured ideation to generate a wide range of potential solutions. The best ideation processes balance divergent thinking (creating many options) with convergent thinking (focusing on promising directions), all while keeping users at the center.</p>
      
      <h3>Prototyping: Making Ideas Tangible</h3>
      
      <p>Prototyping transforms abstract ideas into tangible concepts that can be tested and refined. Early prototypes are intentionally rough and focused on learning rather than perfection. They serve as conversation starters that help teams and users alike envision how potential solutions might work in practice.</p>
      
      <h3>Testing: Learning Through Feedback</h3>
      
      <p>When prototypes are put in front of real users, the learning accelerates. Testing isn't about validation but about gathering honest feedback to improve the solution. This phase often sends teams back to earlier stages as new insights emerge, creating a cycle of continuous improvement.</p>
      
      <h3>Implementation: Bringing Solutions to Life</h3>
      
      <p>The final phase focuses on turning refined concepts into implementable solutions. This involves planning for pilot programs, developing adoption strategies, and creating systems for monitoring impact and making ongoing improvements based on real-world performance.</p>
    `
  },
  {
    id: 'hcd-african-context',
    title: 'Human-Centered Design in the African Context',
    excerpt: 'Learn how HCD approaches are being adapted and applied to address unique challenges and opportunities across different African communities and sectors.',
    imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop',
    date: 'April 5, 2025',
    readTime: '10',
    content: `
      <h2>Human-Centered Design in the African Context</h2>
      
      <p>While the core principles of HCD are universal, their application must be thoughtfully adapted to different contexts. In Africa's diverse cultural, economic, and social landscapes, human-centered design has shown tremendous potential for creating locally appropriate and sustainable solutions.</p>
      
      <h3>Cultural Contextualization</h3>
      
      <p>Effective design in Africa requires deep respect for local cultures, traditions, and social structures. From communication styles to decision-making processes, cultural nuances significantly impact how communities engage with new ideas and solutions. Designers must approach their work with cultural humility, recognizing that local knowledge is an essential asset rather than a barrier to innovation.</p>
      
      <h3>Resource Constraints as Catalysts for Creativity</h3>
      
      <p>Limited resources—whether financial, technological, or infrastructural—often characterize design contexts across Africa. Yet these constraints can drive remarkable creativity and efficiency. The principle of "frugal innovation" or "jugaad" has led to solutions that achieve more with less and are inherently more sustainable and accessible.</p>
      
      <h3>Building Local Capacity</h3>
      
      <p>Sustainable impact requires that HCD processes build local capacity rather than creating dependency on external expertise. This means training local designers, involving community members as co-creators, and ensuring that solutions can be maintained, adapted, and scaled locally.</p>
      
      <h3>Bridging Traditional and Modern Systems</h3>
      
      <p>Many successful innovations in Africa thoughtfully bridge traditional systems with modern approaches. For example, incorporating indigenous knowledge into healthcare innovations or building digital financial services that respect existing social lending practices can create solutions that gain wider acceptance and adoption.</p>
      
      <h3>Addressing Systemic Challenges</h3>
      
      <p>While HCD often focuses on specific user needs, addressing Africa's complex challenges requires systems thinking. This means considering how interventions in one area (e.g., agriculture) might impact others (e.g., water access, market systems) and designing holistic solutions that address interconnected problems.</p>
      
      <h3>Case Studies: HCD Success Stories</h3>
      
      <p>Across the continent, human-centered design has led to remarkable innovations: from mobile money solutions that have revolutionized financial inclusion to community-led sanitation initiatives and maternal health interventions designed with and for rural women. These successes share a common thread: they began by deeply understanding local contexts and co-creating with communities.</p>
    `
  },
  {
    id: 'executive-coaching-design-thinking',
    title: 'Executive Coaching Through a Design Thinking Lens',
    excerpt: 'Explore how principles from design thinking can enhance executive coaching, creating more personalized and effective leadership development experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2070&auto=format&fit=crop',
    date: 'March 18, 2025',
    readTime: '6',
    content: `
      <h2>Executive Coaching Through a Design Thinking Lens</h2>
      
      <p>When design thinking methodologies are applied to executive coaching, the result is a more adaptive, personalized, and impactful approach to leadership development. This integration creates a powerful framework for helping leaders navigate complexity and drive meaningful change.</p>
      
      <h3>The Coaching Design Process</h3>
      
      <p>Traditional executive coaching often follows a relatively standard format. By contrast, design-influenced coaching embraces a more flexible process that begins with discovery and empathy, defines specific leadership challenges, ideates possible approaches, prototypes new behaviors or strategies, and continuously tests and refines through real-world application.</p>
      
      <h3>Embracing Ambiguity and Complexity</h3>
      
      <p>Design thinking teaches leaders to become comfortable with ambiguity—a critical skill in today's volatile business environment. Through coaching, executives learn to approach complex problems with curiosity rather than immediate solutions, exploring multiple perspectives before committing to action.</p>
      
      <h3>Experimentation and Learning</h3>
      
      <p>Design-oriented coaching encourages leaders to approach their development as a series of experiments rather than seeking perfect solutions. This mindset reduces the fear of failure and creates space for authentic growth. Coaches help executives design small leadership "prototypes" that can be tested in low-risk environments before scaling.</p>
      
      <h3>Empathy as a Leadership Superpower</h3>
      
      <p>Perhaps the most valuable transfer from design thinking to executive coaching is the emphasis on empathy. Leaders who develop deep empathy for their team members, customers, and stakeholders make more informed decisions and build stronger organizational cultures. Coaching can help executives develop specific practices for strengthening their empathic capacities.</p>
      
      <h3>Co-Creating Leadership Solutions</h3>
      
      <p>Design thinking principles encourage coaches and executives to co-create development plans rather than imposing predetermined frameworks. This collaborative approach ensures higher relevance and commitment, as leaders actively participate in designing their own growth journey.</p>
      
      <h3>Visual Thinking and Communication</h3>
      
      <p>Design methodologies often employ visual tools to map complex systems and relationships. When applied to coaching, these techniques help executives visualize their leadership challenges and opportunities from new perspectives, leading to breakthrough insights that verbal discussion alone might miss.</p>
    `
  },
  {
    id: 'future-of-hcd',
    title: 'The Future of Human-Centered Design',
    excerpt: 'Examine emerging trends and evolving practices in HCD as designers and organizations adapt to new technologies, social changes, and global challenges.',
    imageUrl: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1974&auto=format&fit=crop',
    date: 'March 2, 2025',
    readTime: '9',
    content: `
      <h2>The Future of Human-Centered Design</h2>
      
      <p>As we navigate increasingly complex global challenges, human-centered design continues to evolve. New technologies, changing social dynamics, and pressing global issues are reshaping how we practice and apply design thinking. Here are some of the emerging trends that will define the future of HCD.</p>
      
      <h3>Ethical Design and Responsible Innovation</h3>
      
      <p>As design's influence grows, so does its responsibility. The future of HCD will place greater emphasis on ethical considerations, addressing questions about unintended consequences, inclusivity, sustainability, and the long-term impact of innovations. Designers are developing new frameworks and tools to ensure their work contributes positively to society.</p>
      
      <h3>Artificial Intelligence and Human-AI Collaboration</h3>
      
      <p>AI is rapidly transforming the design landscape—both as a tool for designers and as a component of the solutions being designed. The most effective approaches will focus not on replacing human creativity but on augmenting it, creating new possibilities for human-AI collaboration that enhance rather than diminish the human element in design.</p>
      
      <h3>Systems Design for Complex Challenges</h3>
      
      <p>The world's most pressing problems—from climate change to healthcare access—cannot be solved through isolated interventions. Future HCD practitioners will increasingly adopt systems thinking, designing interconnected solutions that address root causes rather than symptoms and considering impacts across entire ecosystems.</p>
      
      <h3>Remote and Distributed Design</h3>
      
      <p>The global shift toward remote collaboration is transforming how design teams work. New digital tools and methodologies are enabling effective co-creation across distances, opening opportunities for more diverse and global design teams while presenting new challenges for building empathy and conducting field research.</p>
      
      <h3>Scaling Design Impact</h3>
      
      <p>As HCD proves its value, organizations are seeking ways to scale its impact beyond individual projects. This includes embedding design thinking throughout organizational cultures, developing design capabilities across diverse roles, and creating systems that allow successful innovations to spread and adapt to new contexts.</p>
      
      <h3>Participatory Futures</h3>
      
      <p>The next frontier in participation is involving communities not just in addressing current needs but in imagining and shaping preferred futures. Emerging methods combine speculative design, futuring, and participatory approaches to help communities envision and work toward the futures they want to create.</p>
      
      <h3>Measurement Evolution</h3>
      
      <p>As HCD matures, so do approaches to measuring its impact. Moving beyond traditional metrics, designers are developing more nuanced frameworks that capture both quantitative outcomes and qualitative dimensions like empowerment, capability building, and systems change over longer time horizons.</p>
    `
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the post that matches the id
    const currentPost = blogPosts.find(post => post.id === id);
    setPost(currentPost);
  }, [id]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  
  return (
    <div className="overflow-hidden">
      <Navigation />
      
      <main>
        {/* Blog Hero */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <Link to="/blog" className="text-teal hover:text-teal-dark flex items-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                    />
                  </svg>
                  Back to Blog
                </Link>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center text-muted-foreground mb-6">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Image */}
        <div className="container mx-auto px-4 -mt-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Blog Content */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </section>
        
        {/* More Articles */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">More Articles</h3>
              <div className="space-y-4">
                {blogPosts
                  .filter(p => p.id !== post.id)
                  .slice(0, 3)
                  .map(relatedPost => (
                    <Link 
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-bold">{relatedPost.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{relatedPost.excerpt}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
