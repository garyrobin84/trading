/*
  # Gary Robinson Trading Database Schema
  
  1. New Tables
    - `clients` - Client information and registration data
    - `courses` - Available trading courses with pricing and features
    - `mentorship` - Mentorship program details and pricing
    - `bookings` - Session bookings and appointments
    - `payments` - Payment transactions and status tracking
    - `contact_submissions` - Contact form submissions
    - `user_sessions` - User login session tracking
    - `newsletter_subscribers` - Newsletter subscription management
    - `trading_performance` - Student trading performance metrics

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Admin policies for management access

  3. Sample Data
    - Insert sample courses, mentorship programs, and test data
    - Create useful views for common queries
*/

-- Clients table
CREATE TABLE IF NOT EXISTS clients (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(100) NOT NULL,
    email varchar(150) UNIQUE NOT NULL,
    phone varchar(20) NOT NULL,
    package_selected varchar(50),
    payment_status varchar(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
    registration_date timestamptz DEFAULT now(),
    last_login timestamptz,
    status varchar(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
    notes text,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    course_name varchar(100) NOT NULL,
    description text,
    price decimal(10,2) NOT NULL,
    original_price decimal(10,2),
    duration_weeks integer,
    level varchar(20) NOT NULL CHECK (level IN ('beginner', 'intermediate', 'advanced', 'elite')),
    features jsonb,
    outcomes jsonb,
    is_active boolean DEFAULT true,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Mentorship programs table
CREATE TABLE IF NOT EXISTS mentorship (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    program_name varchar(100) NOT NULL,
    description text,
    price decimal(10,2) NOT NULL,
    billing_period varchar(20) NOT NULL CHECK (billing_period IN ('monthly', 'quarterly', 'annually')),
    features jsonb,
    benefits jsonb,
    max_students integer DEFAULT 50,
    current_students integer DEFAULT 0,
    is_active boolean DEFAULT true,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id uuid NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    session_date timestamptz NOT NULL,
    session_type varchar(20) NOT NULL CHECK (session_type IN ('consultation', 'mentorship', 'group_call', 'trading_room')),
    duration_minutes integer DEFAULT 60,
    status varchar(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled', 'no_show')),
    meeting_link varchar(255),
    notes text,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Payments table
CREATE TABLE IF NOT EXISTS payments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id uuid NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    amount decimal(10,2) NOT NULL,
    currency varchar(3) DEFAULT 'GBP',
    transaction_id varchar(100) UNIQUE,
    stripe_payment_intent_id varchar(100),
    payment_method varchar(20) DEFAULT 'stripe' CHECK (payment_method IN ('stripe', 'paypal', 'bank_transfer')),
    payment_type varchar(20) NOT NULL CHECK (payment_type IN ('course', 'mentorship', 'consultation')),
    item_id uuid, -- References course_id or mentorship_id
    payment_status varchar(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded', 'disputed')),
    payment_date timestamptz DEFAULT now(),
    refund_date timestamptz,
    refund_amount decimal(10,2) DEFAULT 0.00,
    notes text,
    created_at timestamptz DEFAULT now()
);

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(100) NOT NULL,
    email varchar(150) NOT NULL,
    phone varchar(20) NOT NULL,
    package_interest varchar(50),
    message text NOT NULL,
    status varchar(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'closed')),
    follow_up_date date,
    submitted_date timestamptz DEFAULT now(),
    response_date timestamptz,
    notes text,
    created_at timestamptz DEFAULT now()
);

-- User sessions table
CREATE TABLE IF NOT EXISTS user_sessions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id uuid NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    session_token varchar(255) UNIQUE NOT NULL,
    ip_address inet,
    user_agent text,
    login_time timestamptz DEFAULT now(),
    last_activity timestamptz DEFAULT now(),
    is_active boolean DEFAULT true,
    created_at timestamptz DEFAULT now()
);

-- Newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email varchar(150) UNIQUE NOT NULL,
    name varchar(100),
    subscription_date timestamptz DEFAULT now(),
    status varchar(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
    source varchar(50) DEFAULT 'website',
    preferences jsonb,
    created_at timestamptz DEFAULT now()
);

-- Trading performance table
CREATE TABLE IF NOT EXISTS trading_performance (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id uuid NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    month_year date NOT NULL,
    total_trades integer DEFAULT 0,
    winning_trades integer DEFAULT 0,
    losing_trades integer DEFAULT 0,
    total_pips decimal(10,2) DEFAULT 0.00,
    total_profit_loss decimal(12,2) DEFAULT 0.00,
    win_rate decimal(5,2) DEFAULT 0.00,
    risk_reward_ratio decimal(5,2) DEFAULT 0.00,
    max_drawdown decimal(5,2) DEFAULT 0.00,
    notes text,
    created_at timestamptz DEFAULT now(),
    UNIQUE(client_id, month_year)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_clients_email ON clients(email);
CREATE INDEX IF NOT EXISTS idx_clients_package ON clients(package_selected);
CREATE INDEX IF NOT EXISTS idx_clients_status ON clients(status);
CREATE INDEX IF NOT EXISTS idx_clients_registration_date ON clients(registration_date);

CREATE INDEX IF NOT EXISTS idx_courses_level ON courses(level);
CREATE INDEX IF NOT EXISTS idx_courses_active ON courses(is_active);

CREATE INDEX IF NOT EXISTS idx_mentorship_billing ON mentorship(billing_period);
CREATE INDEX IF NOT EXISTS idx_mentorship_active ON mentorship(is_active);

CREATE INDEX IF NOT EXISTS idx_bookings_client ON bookings(client_id);
CREATE INDEX IF NOT EXISTS idx_bookings_session_date ON bookings(session_date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);

CREATE INDEX IF NOT EXISTS idx_payments_client ON payments(client_id);
CREATE INDEX IF NOT EXISTS idx_payments_transaction ON payments(transaction_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(payment_status);
CREATE INDEX IF NOT EXISTS idx_payments_date ON payments(payment_date);

CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submitted_date ON contact_submissions(submitted_date);

CREATE INDEX IF NOT EXISTS idx_sessions_client ON user_sessions(client_id);
CREATE INDEX IF NOT EXISTS idx_sessions_token ON user_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_sessions_active ON user_sessions(is_active);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscribers(status);

CREATE INDEX IF NOT EXISTS idx_performance_client ON trading_performance(client_id);
CREATE INDEX IF NOT EXISTS idx_performance_month_year ON trading_performance(month_year);

-- Enable Row Level Security
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentorship ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE trading_performance ENABLE ROW LEVEL SECURITY;

-- RLS Policies for clients
CREATE POLICY "Users can read own client data"
  ON clients
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update own client data"
  ON clients
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id::text);

-- RLS Policies for courses (public read)
CREATE POLICY "Anyone can read courses"
  ON courses
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- RLS Policies for mentorship (public read)
CREATE POLICY "Anyone can read mentorship programs"
  ON mentorship
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- RLS Policies for bookings
CREATE POLICY "Users can read own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = client_id::text);

CREATE POLICY "Users can create own bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid()::text = client_id::text);

-- RLS Policies for payments
CREATE POLICY "Users can read own payments"
  ON payments
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = client_id::text);

-- RLS Policies for contact submissions (insert only for anon)
CREATE POLICY "Anyone can create contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- RLS Policies for newsletter (insert only for anon)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- RLS Policies for trading performance
CREATE POLICY "Users can read own trading performance"
  ON trading_performance
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = client_id::text);

-- Insert sample courses
INSERT INTO courses (course_name, description, price, original_price, duration_weeks, level, features, outcomes) VALUES
('Beginner Package', 'Perfect for new traders looking to build a solid foundation across all markets', 997.00, 1297.00, 8, 'beginner', 
 '["Forex, Futures & Crypto Fundamentals", "50+ Video Lessons (20+ Hours)", "Trading Psychology Masterclass", "Risk Management Framework", "Basic Technical Analysis", "Trading Plan Templates", "Private Community Access", "Email Support", "Certificate of Completion"]'::jsonb,
 '["Understand market mechanics", "Execute your first profitable trades", "Develop proper risk management", "Build trading confidence"]'::jsonb),

('Advanced Package', 'For experienced traders ready to take their performance to the next level', 1997.00, 2497.00, 12, 'advanced',
 '["Everything in Beginner Package", "Advanced Technical Analysis", "3 Proprietary Trading Strategies", "Market Structure & Order Flow", "Multi-Timeframe Analysis", "Advanced Risk Management", "Live Trading Sessions (4 per month)", "Weekly Group Q&A Calls", "Trading Journal & Analytics Tools", "Priority Support"]'::jsonb,
 '["Master advanced trading strategies", "Achieve consistent profitability", "Trade multiple markets confidently", "Develop institutional-level skills"]'::jsonb),

('Elite Package', 'The ultimate trading education for serious traders seeking mastery', 2997.00, 3997.00, 16, 'elite',
 '["Everything in Advanced Package", "5 Professional Trading Strategies", "Algorithmic Trading Introduction", "Portfolio Management Techniques", "Institutional Trading Insights", "Custom Strategy Development", "Daily Live Trading Room Access", "Monthly 1-on-1 Coaching Call", "Professional Trading Tools", "Lifetime Course Updates", "VIP Support & Direct Access"]'::jsonb,
 '["Trade like a professional", "Develop your own strategies", "Manage large portfolios", "Achieve financial independence"]'::jsonb);

-- Insert sample mentorship programs
INSERT INTO mentorship (program_name, description, price, billing_period, features, benefits) VALUES
('Monthly Mentorship', 'Perfect for traders who want regular guidance and support', 499.00, 'monthly',
 '["2 x 1-on-1 Sessions per Month (60 min each)", "Weekly Group Coaching Calls", "Trading Room Access (5 days/week)", "Real-time Trade Alerts", "Performance Review & Feedback", "Direct Chat Access", "Trading Plan Optimization", "Risk Management Coaching"]'::jsonb,
 '["Personalized strategy development", "Regular performance tracking", "Immediate support when needed", "Community of serious traders"]'::jsonb),

('Quarterly Mentorship', 'Intensive 3-month program for accelerated growth', 1299.00, 'quarterly',
 '["8 x 1-on-1 Sessions per Quarter (60 min each)", "Daily Group Coaching Calls", "VIP Trading Room Access", "Priority Trade Alerts", "Weekly Performance Analysis", "24/7 Chat Support", "Custom Strategy Development", "Portfolio Management Guidance", "Monthly Goal Setting Sessions"]'::jsonb,
 '["Accelerated learning curve", "Comprehensive skill development", "Consistent accountability", "Advanced strategy implementation"]'::jsonb),

('Annual Mentorship', 'Complete transformation program for serious traders', 3997.00, 'annually',
 '["36 x 1-on-1 Sessions per Year (60 min each)", "Daily Group Coaching Calls", "Elite Trading Room Access", "Instant Trade Alerts", "Weekly Performance Deep Dives", "Direct Phone/Text Access", "Proprietary Strategy Development", "Advanced Portfolio Management", "Quarterly Business Reviews", "Trading Psychology Coaching", "Lifetime Alumni Network Access"]'::jsonb,
 '["Complete trading mastery", "Professional-level skills", "Long-term success planning", "Exclusive networking opportunities"]'::jsonb);

-- Create views for common queries
CREATE OR REPLACE VIEW active_clients AS
SELECT c.*, p.payment_status, co.course_name, m.program_name
FROM clients c
LEFT JOIN payments p ON c.id = p.client_id AND p.payment_status = 'completed'
LEFT JOIN courses co ON p.item_id = co.id AND p.payment_type = 'course'
LEFT JOIN mentorship m ON p.item_id = m.id AND p.payment_type = 'mentorship'
WHERE c.status = 'active';

CREATE OR REPLACE VIEW monthly_revenue AS
SELECT 
    DATE_TRUNC('month', payment_date) as month,
    COUNT(*) as total_payments,
    SUM(amount) as total_revenue,
    AVG(amount) as average_payment
FROM payments 
WHERE payment_status = 'completed'
GROUP BY DATE_TRUNC('month', payment_date)
ORDER BY month DESC;

CREATE OR REPLACE VIEW upcoming_sessions AS
SELECT 
    b.id,
    b.session_date,
    b.session_type,
    c.name as client_name,
    c.email as client_email,
    c.phone as client_phone,
    b.notes
FROM bookings b
JOIN clients c ON b.client_id = c.id
WHERE b.session_date >= NOW() 
AND b.status = 'scheduled'
ORDER BY b.session_date ASC;