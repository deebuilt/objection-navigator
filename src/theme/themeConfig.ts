import { ThemeConfig, theme } from 'antd';

const { defaultAlgorithm, darkAlgorithm } = theme;

export const lightTheme: ThemeConfig = {
  algorithm: defaultAlgorithm,
  token: {
    colorPrimary: '#6B5CE7',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    colorInfo: '#6B5CE7',
    colorBgContainer: '#ffffff',
    colorBgLayout: '#f5f5f5',
    colorBgElevated: '#ffffff',
    colorText: '#2D2A33',
    colorTextSecondary: '#6E6B78',
    colorBorder: '#E8E6E1',
    colorBorderSecondary: '#F0EDE8',
    borderRadius: 12,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: 15,
    controlHeight: 44,
  },
  components: {
    Card: {
      paddingLG: 20,
    },
    Button: {
      controlHeight: 44,
      borderRadius: 10,
    },
    Input: {
      controlHeight: 44,
      borderRadius: 10,
    },
    Segmented: {
      controlHeight: 40,
      borderRadius: 10,
    },
    Tag: {
      borderRadiusSM: 6,
    },
  },
};

export const darkTheme: ThemeConfig = {
  algorithm: darkAlgorithm,
  token: {
    colorPrimary: '#8B7CF7',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    colorInfo: '#8B7CF7',
    colorBgContainer: '#141414',
    colorBgLayout: '#000000',
    colorBgElevated: '#1f1f1f',
    colorText: '#E8E6EF',
    colorTextSecondary: '#9B97A8',
    colorBorder: '#2E2C38',
    colorBorderSecondary: '#252330',
    borderRadius: 12,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: 15,
    controlHeight: 44,
  },
  components: {
    Card: {
      paddingLG: 20,
    },
    Button: {
      controlHeight: 44,
      borderRadius: 10,
    },
    Input: {
      controlHeight: 44,
      borderRadius: 10,
    },
    Segmented: {
      controlHeight: 40,
      borderRadius: 10,
    },
    Tag: {
      borderRadiusSM: 6,
    },
  },
};
