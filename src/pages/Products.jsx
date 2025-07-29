import { Container, Typography, Grid, Card, CardContent, Box, Button, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import StorageIcon from '@mui/icons-material/Storage';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import SpeedIcon from '@mui/icons-material/Speed';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const products = [
  {
    title: '智能网络配置管理',
    description: '自动化网络设备配置和管理，支持多厂商设备，提供统一的管理界面',
    icon: StorageIcon,
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    features: ['多厂商设备支持', '批量配置部署', '配置模板管理', '版本控制与回滚']
  },
  {
    title: '网络监控与分析',
    description: '实时监控网络性能和健康状况，提供深度分析和故障预警',
    icon: NetworkCheckIcon,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    features: ['实时性能监控', '智能告警系统', '趋势分析', '故障定位']
  },
  {
    title: '性能优化',
    description: '基于AI的网络性能优化建议，自动调整网络参数以提升性能',
    icon: SpeedIcon,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    features: ['AI性能分析', '自动优化建议', '负载均衡', '资源调度']
  },
  {
    title: '自动化集成',
    description: '支持与现有IT系统的无缝集成，提供丰富的API接口',
    icon: IntegrationInstructionsIcon,
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    features: ['API集成', '工作流自动化', '第三方系统对接', '自定义扩展']
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

function Products() {
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
              label="企业级产品解决方案" 
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
              产品与
              <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                服务
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
                fontWeight: 400
              }}
            >
              为企业提供全方位的网络自动化解决方案
              <br />
              从配置管理到性能优化，一站式服务
            </Typography>
          </motion.div>
        </Box>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        '& .product-icon': {
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
                        background: product.gradient,
                      }}
                    />
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          sx={{
                            width: 60,
                            height: 60,
                            mr: 3,
                            background: product.gradient,
                            '& .product-icon': {
                              fontSize: 28,
                              color: 'white'
                            }
                          }}
                        >
                          <Icon className="product-icon" sx={{ transition: 'transform 0.3s ease' }} />
                        </Avatar>
                        <Typography 
                          variant="h4" 
                          component="h2"
                          sx={{ 
                            fontWeight: 700,
                            color: 'text.primary'
                          }}
                        >
                          {product.title}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        paragraph
                        sx={{ 
                          fontSize: '1.1rem',
                          lineHeight: 1.7,
                          mb: 4
                        }}
                      >
                        {product.description}
                      </Typography>
                      <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                          {product.features.map((feature, featureIndex) => (
                            <Grid item xs={12} sm={6} key={featureIndex}>
                              <Box sx={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                p: 2,
                                borderRadius: 2,
                                backgroundColor: `${product.color}08`,
                                border: `1px solid ${product.color}20`
                              }}>
                                <CheckCircleIcon 
                                  sx={{ 
                                    color: product.color, 
                                    mr: 2,
                                    fontSize: 20
                                  }} 
                                />
                                <Typography 
                                  variant="body2" 
                                  sx={{ 
                                    fontWeight: 600,
                                    color: 'text.primary'
                                  }}
                                >
                                  {feature}
                                </Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
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
            定制化解决方案
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
            我们深知每个企业都有其独特的需求。我们的专业团队将为您量身打造最适合的网络自动化解决方案，
            确保满足您的具体业务需求，并为您的企业数字化转型提供强有力的支持。
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip 
              label="免费咨询" 
              color="primary" 
              sx={{ fontWeight: 600 }}
            />
            <Chip 
              label="快速定制" 
              color="success" 
              sx={{ fontWeight: 600 }}
            />
            <Chip 
              label="专业团队" 
              color="warning" 
              sx={{ fontWeight: 600 }}
            />
            <Chip 
              label="持续支持" 
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

export default Products;