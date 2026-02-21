import {FC} from 'react';
import Link from 'next/link';
import {GetStaticPaths, GetStaticProps} from 'next';

// Get basePath for static assets
const basePath = process.env.NODE_ENV === 'production' ? '/personal-website' : '';

// Define all your projects here
const projects: Record<string, {
  title: string;
  description: string;
  videos?: {src: string; caption: string}[];
  images?: {src: string; caption: string}[];
  youtubeIds?: {id: string; caption: string}[];
  sections?: {title: string; content: string | JSX.Element}[];
  links?: {label: string; url: string}[];
}> = {

  // Project 1(Imitation Learning & VLA Development)
  'koch-imitation-learning': {
    title: 'Imitation Learning & VLAs with low-cost robotic arm',
    description: `
      Imagine a robotic arm that can learn to perform tasks 
      just by watching videos and reading instruction!
    `.trim(),
    videos: [
      {src: '/videos/koch_open_draw.mp4', caption: 'Robot opening drawer demo'},
    ],
    images: [
      {src: '/images/portfolio/Franka_open_drawer.png', caption: 'Training process'},
    ],
    youtubeIds: [
      {id: '8RHWoJiWaVc', caption: 'Full demonstration video'},
    ],
    sections: [
      {
        title: 'Overview',
        content: (
          <div className="space-y-4">
            <p>
              This project demonstrates how low-cost robotic arms{' '}
              <strong>
                (<a href="https://github.com/jess-moss/koch-v1-1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Koch</a>)
              </strong>{' '}
              can learn using{' '}
              <strong>Visual Language Action (VLA)</strong>{' '}
              models like{' '}
              <strong>
                <a href="https://huggingface.co/docs/lerobot/smolvla" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">SmolVLA</a>
              </strong>{' '}
              &{' '}
              <strong>
                <a href="https://huggingface.co/docs/lerobot/groot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GR00T N1.5</a>
              </strong>{' '}
              and{' '}
              <strong>
                imitation learning like{' '}
                <a href="https://huggingface.co/docs/lerobot/act" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Action Chunking Transformer (ACT)</a>
              </strong>.
            </p>
            <img 
              src={`${basePath}/images/portfolio/lerobot-pipeline-koch.png`}
              alt="LeRobot Pipeline - How imitation learning models are trained"
              className="w-full rounded-lg shadow-lg mt-4"
            />
            <p className="text-sm text-gray-400 text-center">LeRobot Pipeline: Training imitation learning models by Koch robot</p>
          </div>
        ),
      },
      {
        title: '1. Data Collection',
        content: (
          <div className="space-y-4">
            <p>
              The first step is collecting high-quality demonstration data from human teleoperation.
            </p>
            
            <h3 className="text-lg font-semibold text-white mt-6">Dataset Format</h3>
            <p>
              We use the <strong>LeRobot dataset format</strong>, which stores episodes as Parquet files 
              containing <strong> observation(following robot joint states) </strong>, and <strong> action(leading arm's joint states) </strong> and mp4 for top and front camera observation.
            </p>
            
            <div className="bg-gray-800 rounded-lg p-4 mt-4 font-mono text-sm">
              <p className="text-green-400 mb-2"># Robot Joint States (6-DOF)</p>
              <ul className="text-gray-300 space-y-1 ml-4">
                <li>{'"shoulder_pan.pos"'}</li>
                <li>{'"shoulder_lift.pos"'}</li>
                <li>{'"elbow_flex.pos"'}</li>
                <li>{'"wrist_flex.pos"'}</li>
                <li>{'"wrist_roll.pos"'}</li>
                <li>{'"gripper.pos"'}</li>
              </ul>
              <p className="text-green-400 mb-2 mt-4"># Camera Observations</p>
              <ul className="text-gray-300 space-y-1 ml-4">
                <li>{'"observation.images.front"'}</li>
                <li>{'"observation.images.top"'}</li>
              </ul>
            </div>
            <p className="text-sm text-gray-400 text-center mt-2">LeRobot dataset structure with joint positions and camera observations</p>
            
            <h3 className="text-lg font-semibold text-white mt-6">Control Method</h3>
            <p>
              Human demonstrations are collected via <strong>teleoperation</strong> using a leader-follower 
              setup, where the operator controls a leader arm and the follower arm mimics the movements.
            </p>
              <img 
                src={`${basePath}/images/portfolio/koch-teleop.gif`}
                alt="Leader-follower teleoperation for data collection"
                className="w-full rounded-lg shadow-lg mt-2"
              />
            <p className="text-sm text-gray-400 text-center">Leader-follower teleoperation for data collection</p>
          </div>
        ),
      },
      {
        title: '2. Model Training',
        content: (
          <div className="space-y-4">
            <p>
              After collecting demonstration data, we train the imitation learning model to 
              predict robot actions from visual observations and language instructions.
            </p>
            
            <h3 className="text-lg font-semibold text-white mt-6">Training Pipeline</h3>
            <p>
              The model learns to map camera images and task instructions to action sequences 
              using supervised learning on the collected demonstrations.
            </p>
            <img 
              src={`${basePath}/images/portfolio/training-pipeline.png`}
              alt="Model training pipeline"
              className="w-full rounded-lg shadow-lg mt-2"
            />
            <p className="text-sm text-gray-400 text-center">Training pipeline overview</p>
            
            <h3 className="text-lg font-semibold text-white mt-6">Training Configuration</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Batch size:</strong> 32</li>
              <li><strong>Learning rate:</strong> 1e-4</li>
              <li><strong>Training epochs:</strong> 100</li>
              <li><strong>GPU:</strong> NVIDIA RTX 4090</li>
            </ul>
          </div>
        ),
      },
      {
        title: '3. Deployment',
        content: (
          <div className="space-y-4">
            <p>
              The trained model is deployed on the robot for real-time inference 
              and autonomous task execution.
            </p>
            
            <h3 className="text-lg font-semibold text-white mt-6">Real-time Inference</h3>
            <p>
              The model runs at <strong>10Hz</strong>, predicting action chunks that are 
              executed by the robot controller in real-time.
            </p>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-lg shadow-lg mt-2"
            >
              <source src={`${basePath}/videos/deployment-demo.mp4`} type="video/mp4" />
            </video>
            <p className="text-sm text-gray-400 text-center">Autonomous task execution after deployment</p>
            
            <h3 className="text-lg font-semibold text-white mt-6">System Requirements</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Inference hardware:</strong> NVIDIA GPU with 8GB+ VRAM</li>
              <li><strong>Framework:</strong> PyTorch + ROS2 Humble</li>
              <li><strong>Control frequency:</strong> 10Hz action prediction</li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Technical Details',
        content: (
          <div className="space-y-4">
            <p>
              The system uses <span className="font-bold">ROS2</span> for robot control
              and <span className="font-bold">PyTorch</span> for model inference.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Framework:</strong> ROS2 Humble</li>
              <li><strong>Model:</strong> Action Chunking Transformer</li>
              <li><strong>Inference Speed:</strong> 10Hz real-time</li>
            </ul>
          </div>
        ),
      },
    ],
    links: [
      {label: 'GitHub', url: 'https://github.com/yourusername/franka-vla'},
      {label: 'Paper', url: 'https://arxiv.org/abs/xxxx.xxxxx'},
    ],
  },

  // Project 2(Imitation Learning & VLA Development)
  'franka-imitation-learning': {
    title: 'Imitation Learning & VLAs with low-cost robotic arm',
    description: `
      Imagine a robotic arm that can learn to perform tasks 
      just by watching videos and reading instruction!
    `.trim(),
    videos: [
      {src: '/videos/franka_open_draw.mp4', caption: 'Robot opening drawer demo'},
    ],
    images: [
      {src: '/images/portfolio/franka-1.png', caption: 'System setup'},
      {src: '/images/portfolio/franka-2.png', caption: 'Training process'},
    ],
    youtubeIds: [
      {id: '8RHWoJiWaVc', caption: 'Full demonstration video'},
    ],
    sections: [
      {
        title: 'Overview',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models like <strong>SmolVLA & GR00T N1.5 </strong>and{' '}
            <strong>imitation learning like Action Chunking Transformer(ACT) </strong>.
          </p>
        ),
      },
      {
        title: 'Project Details',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models and{' '}
            <strong>imitation learning</strong>.
          </p>
        ),
      },
      {
        title: 'Technical Details',
        content: (
          <div className="space-y-4">
            <p>
              The system uses <span className="font-bold">ROS2</span> for robot control
              and <span className="font-bold">PyTorch</span> for model inference.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Framework:</strong> ROS2 Humble</li>
              <li><strong>Model:</strong> Action Chunking Transformer</li>
              <li><strong>Inference Speed:</strong> 10Hz real-time</li>
            </ul>
          </div>
        ),
      },
    ],
    links: [
      {label: 'GitHub', url: 'https://github.com/yourusername/franka-vla'},
      {label: 'Paper', url: 'https://arxiv.org/abs/xxxx.xxxxx'},
    ],
  },

  // Project 3(Imitation Learning & VLA Development)
  'koch-vla': {
    title: 'Imitation Learning & VLAs with low-cost robotic arm',
    description: `
      Imagine a robotic arm that can learn to perform tasks 
      just by watching videos and reading instruction!
    `.trim(),
    videos: [
      {src: '/videos/koch_open_drawer.mp4', caption: 'Robot opening drawer demo'},
    ],
    images: [
      {src: '/images/portfolio/koch-1.png', caption: 'System setup'},
      {src: '/images/portfolio/koch-2.png', caption: 'Training process'},
    ],
    youtubeIds: [
      {id: '8RHWoJiWaVc', caption: 'Full demonstration video'},
    ],
    sections: [
      {
        title: 'Overview',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models like <strong>SmolVLA & GR00T N1.5 </strong>and{' '}
            <strong>imitation learning like Action Chunking Transformer(ACT) </strong>.
          </p>
        ),
      },
      {
        title: 'Project Details',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models and{' '}
            <strong>imitation learning</strong>.
          </p>
        ),
      },
      {
        title: 'Technical Details',
        content: (
          <div className="space-y-4">
            <p>
              The system uses <span className="font-bold">ROS2</span> for robot control
              and <span className="font-bold">PyTorch</span> for model inference.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Framework:</strong> ROS2 Humble</li>
              <li><strong>Model:</strong> Action Chunking Transformer</li>
              <li><strong>Inference Speed:</strong> 10Hz real-time</li>
            </ul>
          </div>
        ),
      },
    ],
    links: [
      {label: 'GitHub', url: 'https://github.com/yourusername/franka-vla'},
      {label: 'Paper', url: 'https://arxiv.org/abs/xxxx.xxxxx'},
    ],
  },

  // Project 4(Imitation Learning & VLA Development)
  'attention-heat-map': {
    title: 'Attention Heat Map Visualization for VLA Models',
    description: `
      Visualizing attention maps for VLA models to understand how the model focuses on different parts of the input.
    `.trim(),
    videos: [
      {src: '/videos/franka_open_draw.mp4', caption: 'Robot opening drawer demo'},
    ],
    images: [
      {src: '/images/portfolio/franka-1.png', caption: 'System setup'},
      {src: '/images/portfolio/franka-2.png', caption: 'Training process'},
    ],
    youtubeIds: [
      {id: '8RHWoJiWaVc', caption: 'Full demonstration video'},
    ],
    sections: [
      {
        title: 'Overview',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models like <strong>SmolVLA & GR00T N1.5 </strong>and{' '}
            <strong>imitation learning like Action Chunking Transformer(ACT) </strong>.
          </p>
        ),
      },
      {
        title: 'Project Details',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models and{' '}
            <strong>imitation learning</strong>.
          </p>
        ),
      },
      {
        title: 'Technical Details',
        content: (
          <div className="space-y-4">
            <p>
              The system uses <span className="font-bold">ROS2</span> for robot control
              and <span className="font-bold">PyTorch</span> for model inference.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Framework:</strong> ROS2 Humble</li>
              <li><strong>Model:</strong> Action Chunking Transformer</li>
              <li><strong>Inference Speed:</strong> 10Hz real-time</li>
            </ul>
          </div>
        ),
      },
    ],
    links: [
      {label: 'GitHub', url: 'https://github.com/yourusername/franka-vla'},
      {label: 'Paper', url: 'https://arxiv.org/abs/xxxx.xxxxx'},
    ],
  },

  // Autonomous Navigation System Development

  // Project 5(Autonomous Navigation System Development for turtlebot)
  'turtlebot-nav': {
    title: 'Multi-map Switching System for Robot Navigation',
    description: `
      Developing a multi-map switching system for autonomous navigation of a TurtleBot in dynamic environments.
    `.trim(),
    videos: [
      {src: '/videos/turtlebot_multi_map.mp4', caption: 'Multi-map switching demo'},
    ],
    images: [
      {src: '/images/portfolio/turtlebot-1.png', caption: 'System setup'},
      {src: '/images/portfolio/turtlebot-2.png', caption: 'Training process'},
    ],
    youtubeIds: [
      {id: '8RHWoJiWaVc', caption: 'Full demonstration video'},
    ],
    sections: [
      {
        title: 'Overview',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models like <strong>SmolVLA & GR00T N1.5 </strong>and{' '}
            <strong>imitation learning like Action Chunking Transformer(ACT) </strong>.
          </p>
        ),
      },
      {
        title: 'Project Details',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models and{' '}
            <strong>imitation learning</strong>.
          </p>
        ),
      },
      {
        title: 'Technical Details',
        content: (
          <div className="space-y-4">
            <p>
              The system uses <span className="font-bold">ROS2</span> for robot control
              and <span className="font-bold">PyTorch</span> for model inference.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Framework:</strong> ROS2 Humble</li>
              <li><strong>Model:</strong> Action Chunking Transformer</li>
              <li><strong>Inference Speed:</strong> 10Hz real-time</li>
            </ul>
          </div>
        ),
      },
    ],
    links: [
      {label: 'GitHub', url: 'https://github.com/yourusername/turtlebot-multi-map'},
      {label: 'Paper', url: 'https://arxiv.org/abs/xxxx.xxxxx'},
    ],
  },
  
  // Project 6(Autonomous Navigation System Development for spot)
  'spot-nav': {
    title: 'Multi-map Switching System for Spot Robot Navigation',
    description: `
      Developing a multi-map switching system for autonomous navigation of a Spot robot in dynamic environments.
    `.trim(),
    videos: [
      {src: '/videos/spot_multi_map.mp4', caption: 'Multi-map switching demo'},
    ],
    images: [
      {src: '/images/portfolio/spot-1.png', caption: 'System setup'},
      {src: '/images/portfolio/spot-2.png', caption: 'Training process'},
    ],
    youtubeIds: [
      {id: '8RHWoJiWaVc', caption: 'Full demonstration video'},
    ],
    sections: [
      {
        title: 'Overview',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models like <strong>SmolVLA & GR00T N1.5 </strong>and{' '}
            <strong>imitation learning like Action Chunking Transformer(ACT) </strong>.
          </p>
        ),
      },
      {
        title: 'Project Details',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models and{' '}
            <strong>imitation learning</strong>.
          </p>
        ),
      },
      {
        title: 'Technical Details',
        content: (
          <div className="space-y-4">
            <p>
              The system uses <span className="font-bold">ROS2</span> for robot control
              and <span className="font-bold">PyTorch</span> for model inference.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Framework:</strong> ROS2 Humble</li>
              <li><strong>Model:</strong> Action Chunking Transformer</li>
              <li><strong>Inference Speed:</strong> 10Hz real-time</li>
            </ul>
          </div>
        ),
      },
    ],
    links: [
      {label: 'GitHub', url: 'https://github.com/yourusername/turtlebot-multi-map'},
      {label: 'Paper', url: 'https://arxiv.org/abs/xxxx.xxxxx'},
    ],
  },

  // Project 7(Autonomous Visual Navigation System Development for triceratops)
  'triceratops-nav': {
    title: 'Visual Navigation System for Triceratops Robot',
    description: `
      Developing a visual navigation system for autonomous navigation of a Triceratops robot in indoor environments.
    `.trim(),
    videos: [
      {src: '/videos/triceratops_visual_nav.mp4', caption: 'Visual navigation demo'},
    ],
    images: [
      {src: '/images/portfolio/triceratops-1.png', caption: 'System setup'},
      {src: '/images/portfolio/triceratops-2.png', caption: 'Training process'},
    ],
    youtubeIds: [
      {id: '8RHWoJiWaVc', caption: 'Full demonstration video'},
    ],
    sections: [
      {
        title: 'Overview',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models like <strong>SmolVLA & GR00T N1.5 </strong>and{' '}
            <strong>imitation learning like Action Chunking Transformer(ACT) </strong>.
          </p>
        ),
      },
      {
        title: 'Project Details',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models and{' '}
            <strong>imitation learning</strong>.
          </p>
        ),
      },
      {
        title: 'Technical Details',
        content: (
          <div className="space-y-4">
            <p>
              The system uses <span className="font-bold">ROS2</span> for robot control
              and <span className="font-bold">PyTorch</span> for model inference.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Framework:</strong> ROS2 Humble</li>
              <li><strong>Model:</strong> Action Chunking Transformer</li>
              <li><strong>Inference Speed:</strong> 10Hz real-time</li>
            </ul>
          </div>
        ),
      },
    ],
    links: [
      {label: 'GitHub', url: 'https://github.com/yourusername/turtlebot-multi-map'},
      {label: 'Paper', url: 'https://arxiv.org/abs/xxxx.xxxxx'},
    ],
  },

  // Project 8(Autonomous Visual Navigation (local planner) for triceratops)
  'triceratops-local-planner': {
    title: 'Local Planner for Triceratops Visual Navigation System',
    description: `
      Developing a local planner for autonomous navigation of a Triceratops robot in indoor environments.
    `.trim(),
    videos: [
      {src: '/videos/triceratops_visual_nav.mp4', caption: 'Visual navigation demo'},
    ],
    images: [
      {src: '/images/portfolio/triceratops-1.png', caption: 'System setup'},
      {src: '/images/portfolio/triceratops-2.png', caption: 'Training process'},
    ],
    youtubeIds: [
      {id: '8RHWoJiWaVc', caption: 'Full demonstration video'},
    ],
    sections: [
      {
        title: 'Overview',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models like <strong>SmolVLA & GR00T N1.5 </strong>and{' '}
            <strong>imitation learning like Action Chunking Transformer(ACT) </strong>.
          </p>
        ),
      },
      {
        title: 'Project Details',
        content: (
          <p>
            This project demonstrates how robotic arms can learn using{' '}
            <strong>Visual Language Action (VLA)</strong> models and{' '}
            <strong>imitation learning</strong>.
          </p>
        ),
      },
      {
        title: 'Technical Details',
        content: (
          <div className="space-y-4">
            <p>
              The system uses <span className="font-bold">ROS2</span> for robot control
              and <span className="font-bold">PyTorch</span> for model inference.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Framework:</strong> ROS2 Humble</li>
              <li><strong>Model:</strong> Action Chunking Transformer</li>
              <li><strong>Inference Speed:</strong> 10Hz real-time</li>
            </ul>
          </div>
        ),
      },
    ],
    links: [
      {label: 'GitHub', url: 'https://github.com/yourusername/turtlebot-multi-map'},
      {label: 'Paper', url: 'https://arxiv.org/abs/xxxx.xxxxx'},
    ],
  },
};

// Required for static export - generates all project pages at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(projects).map((slug) => ({
    params: {slug},
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params?.slug as string;
  
  // Check if project exists
  if (!projects[slug]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug,
    },
  };
};

const ProjectPage: FC<{slug: string}> = ({slug}) => {
  const project = projects[slug];

  // Handle project not found
  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/#portfolio" className="text-blue-400 hover:underline">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link href="/#portfolio" className="text-blue-400 hover:underline mb-8 inline-block">
          ← Back to Portfolio
        </Link>

        {/* Title */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300">{project.description}</p>
        </section>

        {/* Text Sections */}
        {project.sections?.map((section, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
              {section.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">{section.content}</p>
          </section>
        ))}

        {/* Videos */}
        {project.videos && project.videos.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">Videos</h2>
            <div className="space-y-6">
              {project.videos.map((video, index) => (
                <div key={index}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full rounded-lg shadow-lg"
                  >
                    <source src={`${basePath}${video.src}`} type="video/mp4" />
                  </video>
                  <p className="text-sm text-gray-400 mt-2">{video.caption}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={`${basePath}${image.src}`}
                    alt={image.caption}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <p className="text-sm text-gray-400 mt-2">{image.caption}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* YouTube Videos */}
        {project.youtubeIds && project.youtubeIds.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
              YouTube Videos
            </h2>
            <div className="space-y-6">
              {project.youtubeIds.map((yt, index) => (
                <div key={index}>
                  <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${yt.id}`}
                      title={yt.caption}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{yt.caption}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">Links</h2>
            <div className="flex flex-wrap gap-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default ProjectPage;