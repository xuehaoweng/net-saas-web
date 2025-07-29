import { Container, Typography, Grid, Card, CardContent, Box, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import AutomationIcon from '@mui/icons-material/Settings';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const features = [
  {
    title: '网络自动化',
    description: '通过智能化的网络配置和管理，提高运维效率，降低人为错误',
    icon: AutomationIcon,
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
  },
  {
    title: '云端部署',
    description: '灵活的云端部署方案，支持多云环境，确保业务连续性',
    icon: CloudIcon,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
  },
  {
    title: '安全防护',
    description: '全方位的网络安全防护，保护企业核心资产',
    icon: SecurityIcon,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
  },
  {
    title: '智能分析',
    description: '深度的网络分析和可视化，助力决策优化',
    icon: AnalyticsIcon,
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function Home() {
  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      minHeight: '100vh',
      pt: { xs: 2, md: 4 }
    }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Chip 
              label="企业级网络自动化解决方案" 
              color="primary" 
              sx={{ 
                mb: 3,
                px: 2,
                py: 1,
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            />
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                mb: 3
              }}
            >
              网络自动化的
              <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                未来
              </span>
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              paragraph
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                maxWidth: '900px',
                mx: 'auto',
                lineHeight: 1.6,
                mb: 4,
                fontWeight: 400
              }}
            >
              通过先进的SAAS解决方案，重新定义企业网络管理
              <br />
              让网络运维更智能、更高效、更安全
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(37, 99, 235, 0.3)',
                  }
                }}
              >
                立即体验
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(37, 99, 235, 0.08)',
                    borderColor: 'primary.dark',
                  }
                }}
              >
                了解更多
              </Button>
            </Box>
          </motion.div>
        </Box>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '320px',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        '& .feature-icon': {
                          transform: 'scale(1.1)',
                        }
                      }
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: feature.gradient,
                      }}
                    />
                    <CardContent sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      height: '100%',
                      justifyContent: 'space-between',
                      pt: 3
                    }}>
                      <Box>
                        <Box sx={{ 
                          textAlign: 'center', 
                          mb: 3,
                          p: 2,
                          borderRadius: 3,
                          background: `${feature.color}10`,
                          display: 'inline-flex',
                          mx: 'auto',
                          width: '100%',
                          justifyContent: 'center'
                        }}>
                          <Icon 
                            className="feature-icon"
                            sx={{ 
                              fontSize: 48, 
                              color: feature.color,
                              transition: 'transform 0.3s ease'
                            }} 
                          />
                        </Box>
                        <Typography 
                          gutterBottom 
                          variant="h5" 
                          component="h2" 
                          align="center"
                          sx={{ 
                            fontWeight: 700,
                            mb: 2,
                            color: 'text.primary'
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          color="text.secondary" 
                          align="center"
                          sx={{ 
                            lineHeight: 1.6,
                            fontSize: '0.95rem'
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Chip 
                          label="了解更多" 
                          size="small"
                          sx={{
                            background: `${feature.color}15`,
                            color: feature.color,
                            fontWeight: 600,
                            cursor: 'pointer',
                            '&:hover': {
                              background: `${feature.color}25`,
                            }
                          }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>

      <Box sx={{ 
        mt: 12, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        borderRadius: 4,
        p: { xs: 4, md: 6 },
        border: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            为什么选择我们？
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              maxWidth: 800, 
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              mb: 4
            }}
          >
            我们提供业界领先的网络自动化SAAS解决方案，帮助企业实现网络管理的数字化转型。
            通过智能化的网络配置、监控和分析，让您的网络管理更简单、更高效、更安全。
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip 
              label="99.9% 可用性" 
              color="success" 
              sx={{ fontWeight: 600 }}
            />
            <Chip 
              label="24/7 技术支持" 
              color="primary" 
              sx={{ fontWeight: 600 }}
            />
            <Chip 
              label="企业级安全" 
              color="warning" 
              sx={{ fontWeight: 600 }}
            />
            <Chip 
              label="快速部署" 
              color="info" 
              sx={{ fontWeight: 600 }}
            />
          </Box>
        </motion.div>
      </Box>
        </Container>
      </Box>
    );
}

export default Home;