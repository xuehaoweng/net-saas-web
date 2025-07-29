import { Container, Typography, Grid, Card, CardContent, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const cases = [
  {
    title: '大型企业网络升级',
    company: '智联科技集团',
    description: '帮助客户完成跨区域网络基础设施升级，提升网络性能300%，降低运维成本50%',
    icon: BusinessIcon,
    results: ['网络性能提升300%', '运维成本降低50%', '故障响应时间缩短80%', '员工满意度提升95%']
  },
  {
    title: '教育机构数字化转型',
    company: '未来教育联盟',
    description: '为100+所学校提供统一的网络管理平台，实现教育资源的高效共享和智能调度',
    icon: SchoolIcon,
    results: ['覆盖100+所学校', '资源共享效率提升200%', '管理成本降低60%', '用户体验显著提升']
  },
  {
    title: '医疗系统网络优化',
    company: '康泰医疗集团',
    description: '构建高可用的医疗网络系统，确保关键医疗设备的稳定连接和数据传输',
    icon: LocalHospitalIcon,
    results: ['系统可用性达99.999%', '数据传输延迟降低70%', '网络故障减少90%', '医疗效率提升40%']
  },
  {
    title: '金融行业安全升级',
    company: '恒信金融服务',
    description: '实施全方位的网络安全解决方案，打造安全可靠的金融级网络环境',
    icon: AccountBalanceIcon,
    results: ['安全事件减少95%', '合规性评估通过率100%', '业务处理效率提升150%', '客户满意度提升85%']
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

function Cases() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            客户案例
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            看看我们如何帮助客户实现网络管理的数字化转型
          </Typography>
        </motion.div>
      </Box>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4}>
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 3
                      }
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          sx={{
                            bgcolor: 'primary.main',
                            width: 56,
                            height: 56,
                            mr: 2
                          }}
                        >
                          <Icon />
                        </Avatar>
                        <Box>
                          <Typography variant="h5" component="h2" gutterBottom>
                            {caseItem.title}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary">
                            {caseItem.company}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" paragraph>
                        {caseItem.description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="h6" gutterBottom>
                          项目成果
                        </Typography>
                        <Grid container spacing={1}>
                          {caseItem.results.map((result, resultIndex) => (
                            <Grid item xs={12} sm={6} key={resultIndex}>
                              <Box
                                sx={{
                                  p: 1,
                                  bgcolor: 'background.paper',
                                  borderRadius: 1,
                                  border: 1,
                                  borderColor: 'primary.light'
                                }}
                              >
                                <Typography variant="body2">{result}</Typography>
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

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Typography variant="h4" gutterBottom>
            您的成功，我们的使命
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{  mx: 'auto' }}>
            这些成功案例展示了我们如何帮助不同行业的客户实现网络管理的现代化和智能化。
            让我们携手合作，共同打造属于您的成功故事。
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
}

export default Cases;