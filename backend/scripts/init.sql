-- Portfolio Database Initialization Script

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (example for portfolio)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects table (for portfolio showcase)
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    tech_stack TEXT[],
    github_url VARCHAR(255),
    live_url VARCHAR(255),
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample project data
INSERT INTO projects (title, description, tech_stack, github_url, live_url) VALUES
('Portfolio Website', 'Full-stack portfolio built with React and Express', 
 ARRAY['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker'], 
 'https://github.com/user/portfolio', 'https://portfolio.com')
ON CONFLICT DO NOTHING;
