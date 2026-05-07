export const projectsData = [
  {
    id: 'ai-analytics-engine',
    name: 'AI Analytics Engine',
    tag: 'SaaS',
    price: '$12,500',
    stars: '2.4k',
    growth: '+340%',
    description: 'Full-stack analytics platform with ML-powered insights, real-time dashboards, and API-first architecture.',
    longDescription: `AI Analytics Engine is a production-ready analytics platform designed for modern SaaS businesses. It combines powerful machine learning algorithms with an intuitive dashboard interface, enabling teams to derive actionable insights from their data without needing a dedicated data science team.

The platform features real-time data processing pipelines, customizable dashboard widgets, automated anomaly detection, and a comprehensive REST API for seamless integration with existing tools. Built with scalability in mind, it handles millions of events per second with sub-second query response times.

Key highlights include predictive analytics powered by TensorFlow, natural language querying, role-based access control, white-label support, and a plugin architecture for custom data connectors.`,
    tech: ['Python', 'React', 'PostgreSQL', 'TensorFlow', 'Redis', 'Docker'],
    owner: {
      name: 'Alex Chen',
      username: '@alexchen',
      avatar: null,
      verified: true,
      projects: 12,
      joined: 'Jan 2024',
    },
    metrics: {
      monthlyRevenue: '$4,200/mo',
      activeUsers: '1,850',
      uptime: '99.97%',
      lastUpdated: '2 days ago',
    },
    features: [
      'Real-time data processing pipeline',
      'ML-powered anomaly detection',
      'Customizable dashboard widgets',
      'REST API with 50+ endpoints',
      'White-label ready',
      'Plugin architecture for connectors',
    ],
    license: 'MIT',
    repository: 'github.com/alexchen/ai-analytics',
    demo: 'demo.aianalytics.dev',
    createdAt: 'March 2024',
  },
  {
    id: 'devops-pipeline-kit',
    name: 'DevOps Pipeline Kit',
    tag: 'DevTools',
    price: '$8,200',
    stars: '1.8k',
    growth: '+180%',
    description: 'Zero-config CI/CD toolkit with Docker orchestration, automated testing, and deployment rollbacks.',
    longDescription: `DevOps Pipeline Kit is a zero-configuration CI/CD toolkit that simplifies the entire deployment lifecycle. It abstracts away the complexity of Docker orchestration, automated testing, and multi-environment deployment management into a single, cohesive tool.

Built with Go for maximum performance, it integrates natively with GitHub, GitLab, and Bitbucket, providing instant pipeline creation from a simple YAML configuration. The toolkit includes built-in support for canary deployments, blue-green deployments, and automatic rollbacks on failure detection.

Teams can go from code commit to production deployment in minutes, with full observability and audit trails at every step.`,
    tech: ['Go', 'Docker', 'Terraform', 'Kubernetes', 'Prometheus'],
    owner: {
      name: 'Sarah Kim',
      username: '@sarahkim',
      avatar: null,
      verified: true,
      projects: 7,
      joined: 'Jun 2023',
    },
    metrics: {
      monthlyRevenue: '$2,100/mo',
      activeUsers: '920',
      uptime: '99.99%',
      lastUpdated: '5 hours ago',
    },
    features: [
      'Zero-config pipeline setup',
      'Docker orchestration built-in',
      'Canary & blue-green deploys',
      'Automatic rollback on failure',
      'Multi-cloud support',
      'Real-time build logs',
    ],
    license: 'Apache 2.0',
    repository: 'github.com/sarahkim/pipeline-kit',
    demo: 'kit.devopspipeline.io',
    createdAt: 'August 2023',
  },
  {
    id: 'realtime-collab-sdk',
    name: 'Realtime Collab SDK',
    tag: 'SDK',
    price: '$24,000',
    stars: '3.1k',
    growth: '+520%',
    description: 'Drop-in real-time collaboration engine with CRDT sync, presence indicators, and conflict resolution.',
    longDescription: `Realtime Collab SDK is a production-grade collaboration engine that enables any application to add Google Docs-like real-time editing capabilities. It uses Conflict-free Replicated Data Types (CRDTs) for mathematically guaranteed consistency without central coordination.

The SDK provides drop-in React, Vue, and vanilla JS components for collaborative text editing, whiteboarding, cursor presence, and real-time comments. It handles all the complexity of operational transforms, conflict resolution, and offline-first synchronization under the hood.

Used by over 200 companies in production, it scales to millions of concurrent users with WebSocket-based transport and intelligent delta compression.`,
    tech: ['TypeScript', 'WebSocket', 'Redis', 'React', 'Y.js', 'Node.js'],
    owner: {
      name: 'Marcus Webb',
      username: '@marcuswebb',
      avatar: null,
      verified: true,
      projects: 5,
      joined: 'Feb 2023',
    },
    metrics: {
      monthlyRevenue: '$8,500/mo',
      activeUsers: '3,200',
      uptime: '99.95%',
      lastUpdated: '12 hours ago',
    },
    features: [
      'CRDT-based conflict resolution',
      'Real-time cursor presence',
      'Offline-first architecture',
      'Drop-in React/Vue components',
      'Delta compression for efficiency',
      'Multi-document support',
    ],
    license: 'MIT',
    repository: 'github.com/marcuswebb/collab-sdk',
    demo: 'collab.realtimesdk.dev',
    createdAt: 'November 2023',
  },
  {
    id: 'auth-gateway-pro',
    name: 'Auth Gateway Pro',
    tag: 'Security',
    price: '$15,800',
    stars: '2.9k',
    growth: '+290%',
    description: 'Enterprise-grade authentication gateway with SSO, MFA, and role-based access control out of the box.',
    longDescription: `Auth Gateway Pro is a self-hosted, enterprise-grade authentication and authorization gateway that provides comprehensive identity management out of the box. Built with Rust for maximum security and performance, it handles millions of auth requests per second with minimal resource usage.

The gateway supports OAuth 2.0, OpenID Connect, SAML 2.0, and LDAP protocols, making it compatible with virtually every identity provider. It includes a beautiful admin dashboard for user management, audit logging, and real-time threat detection.

Features include passwordless authentication, hardware key support (FIDO2/WebAuthn), adaptive MFA, session management, and granular role-based access control with policy-as-code support.`,
    tech: ['Rust', 'OAuth2', 'gRPC', 'PostgreSQL', 'WebAuthn', 'Docker'],
    owner: {
      name: 'Priya Sharma',
      username: '@priyasharma',
      avatar: null,
      verified: true,
      projects: 9,
      joined: 'Apr 2023',
    },
    metrics: {
      monthlyRevenue: '$5,800/mo',
      activeUsers: '2,100',
      uptime: '99.99%',
      lastUpdated: '1 day ago',
    },
    features: [
      'SSO with OAuth2 / SAML / OIDC',
      'Adaptive multi-factor auth',
      'FIDO2 / WebAuthn support',
      'Real-time threat detection',
      'Policy-as-code RBAC',
      'Self-hosted with Docker',
    ],
    license: 'BSL 1.1',
    repository: 'github.com/priyasharma/auth-gateway',
    demo: 'demo.authgateway.pro',
    createdAt: 'May 2023',
  },
];
