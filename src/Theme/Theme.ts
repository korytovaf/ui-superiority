export type ThemeProps = {
  type: string;
  breakpoints: {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
  shadow: {
    primary: string;
    offer: string;
  };
  palette: {
    primary: {
      main: string;
      dim: string;
      dim60: string;
      dim40: string;
      dim20: string;
      backdrop: string;
      backdropTable: string;
    };
    rating: {
      default: string;
      low: string;
      middle: string;
      high: string;
      danger: string;
    };
    icon: {
      main: string;
      secondary: string;
    };
    button: {
      primary: string;
      secondary: string;
    };
    accent: string;
    green: string;
    blueLight20: string;
    moderated: string;
    moderated20: string;
    failed: string;
    failed20: string;
    passed20: string;
    danger: string;
  };
  typography: {
    fontSize: number;
    htmlFontSize: number;
    color: string;
    error: string;
    title: {
      main: string;
    };
  };
};

export const Theme = (mode: string | 'Темная'): ThemeProps => {
  switch (mode) {
    case 'Светлая':
      return {
        type: 'Светлая',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 20%)',
        },
        palette: {
          primary: {
            main: '#F5F6FA',
            dim: '#FFFFFF',
            dim60: '#FBFBFD',
            dim40: '#F9F9FC',
            dim20: '#F7F7FB',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#F5F6FAC2', // добавляем прозрачности (C2) к main
          },
          rating: {
            default: '#F5F6FA',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#717FB0',
            secondary: '#FFD03C',
          },
          button: {
            primary: '#286AF0',
            secondary: '#0AEA83',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        // FONTS
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#525F7F',
          error: '#d51e1e',
          title: {
            main: '#525F7F',
          },
        },
      };
    case 'Пеппер':
      return {
        type: 'Пеппер',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#353950',
            dim: '#476BFE',
            dim60: '#4056B8',
            dim40: '#3B4D96',
            dim20: '#384273',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#353950C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#FFD03C',
          },
          button: {
            primary: '#0BCD93',
            secondary: '#0BCD93',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Морбиус':
      return {
        type: 'Морбиус',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#151A20',
            dim: '#23242A',
            dim60: '#1D2025',
            dim40: '#1A1D24',
            dim20: '#171B21',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#151A20C2', // добавляем прозрачности (C2) к main
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#FA253D',
          },
          button: {
            primary: '#FA253D',
            secondary: '#03D5EE',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Один':
      return {
        type: 'Один',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#212123',
            dim: '#3A3A3A',
            dim60: '#303031',
            dim40: '#2A2A2C',
            dim20: '#262628',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#212123C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#C6A05B',
          },
          button: {
            primary: '#C6A05B',
            secondary: '#C6A05B',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        // FONTS
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#C6A05B',
          },
        },
      };
    case 'Танос':
      return {
        type: 'Танос',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#27215B',
            dim: '#443291',
            dim60: '#382B7B',
            dim40: '#322770',
            dim20: '#2D2465',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#27215BC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#FE6186',
          },
          button: {
            primary: '#FFC900',
            secondary: '#FE6186',
          },
          // secondary: {
          //   main: '#FFFFFF',
          //   gray: '#D2D8D8',
          // },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        // FONTS
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Тор':
      return {
        type: 'Тор',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#212B3D',
            dim: '#273243',
            dim60: '#242F40',
            dim40: '#232D3F',
            dim20: '#222C3D',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#212B3DC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#151B24',
            secondary: '#FF676E',
          },
          button: {
            primary: '#18FEFA',
            secondary: '#FF676E',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        // FONTS
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Ракета':
      return {
        type: 'Ракета',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#262A2D',
            dim: '#121416',
            dim60: '#1A1C1F',
            dim40: '#1D2124',
            dim20: '#222528',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#262A2DC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#83888B',
            secondary: '#ED4E11',
          },
          button: {
            primary: '#ED4E11',
            secondary: '#ED4E11',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        // FONTS
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Дэдпул':
      return {
        type: 'Дэдпул',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#FF645C',
            dim: '#0B0112',
            dim60: '#74232C',
            dim40: '#A9343A',
            dim20: '#DD4446',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#FF645CC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#FFFFFF',
          },
          button: {
            primary: '#286AF0',
            secondary: '#0AEA83',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        // FONTS
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#292B2F',
          },
        },
      };
    case 'Дормамму':
      return {
        type: 'Дормамму',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#000002',
            dim: '#7A0EE6',
            dim60: '#49088A',
            dim40: '#31065D',
            dim20: '#18032F',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#000002C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#FEBD12',
          },
          button: {
            primary: '#1BF2FF',
            secondary: '#FF1379',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        // FONTS
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Дракс Разрушитель':
      return {
        type: 'Дракс Разрушитель',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#0C081E',
            dim: '#202133',
            dim60: '#17172B',
            dim40: '#17172B',
            dim20: '#0F0D22',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#0C081EC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#5104E1',
          },
          button: {
            primary: '#5104E1',
            secondary: '#FF5230',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        // FONTS
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Халк':
      return {
        type: 'Халк',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#FFFFFF',
            dim: '#CDF94F',
            dim60: '#E1FB95',
            dim40: '#EBFDB9',
            dim20: '#F5FEDC',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#FFFFFFC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#000000',
            secondary: '#212121',
          },
          button: {
            primary: '#000000',
            secondary: '#FFFFFF',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#000000',
          error: '#FF3854',
          title: {
            main: '#000000',
          },
        },
      };
    case 'Небула':
      return {
        type: 'Небула',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#4F34CC',
            dim: '#5A3DDE',
            dim60: '#5539D6',
            dim40: '#5337D3',
            dim20: '#5135CF',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#4F34CCC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#FEBD12',
          },
          button: {
            primary: '#FEBD12',
            secondary: '#FEBD12',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Гуся':
      return {
        type: 'Гуся',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#101010',
            dim: '#E6734F',
            dim60: '#904B35',
            dim40: '#653729',
            dim20: '#3A231C',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#101010C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#E5CAA1',
          },
          button: {
            primary: '#E5CAA1',
            secondary: '#E5CAA1',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#E6734F',
          },
        },
      };
    case 'Вижен':
      return {
        type: 'Вижен',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#060D1B',
            dim: '#1A212F',
            dim60: '#121926',
            dim40: '#0D1423',
            dim20: '#09111E',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#060D1BC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#4EAAAC',
          },
          button: {
            primary: '#4EAAAC',
            secondary: '#A34872',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#7C8185',
          },
        },
      };
    case 'Азазель':
      return {
        type: 'Азазель',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#F5F6F9',
            dim: '#E3E8F1',
            dim60: '#EAEDF4',
            dim40: '#EEF0F5',
            dim20: '#F1F2F7',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#F5F6F9C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#010810',
            secondary: '#1940DA',
          },
          button: {
            primary: '#1940DA',
            secondary: '#1940DA',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#010810',
          error: '#FF3854',
          title: {
            main: '#010810',
          },
        },
      };
    case 'Йонду Удонта':
      return {
        type: 'Йонду Удонта',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#EAF0F4',
            dim: '#FFFFFF',
            dim60: '#F6F9FA',
            dim40: '#F2F6F8',
            dim20: '#EEF3F6',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#EAF0F4C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#1D2B3A',
            secondary: '#1DA9FB',
          },
          button: {
            primary: '#1DA9FB',
            secondary: '#F43E3B',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#1D2B3A',
          error: '#FF3854',
          title: {
            main: '#1D2B3A',
          },
        },
      };
    case 'Канг Завоеватель':
      return {
        type: 'Канг Завоеватель',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#6E86ED',
            dim: '#33269D',
            dim60: '#7D76BF',
            dim40: '#A29DD0',
            dim20: '#C7C6E1',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#6E86EDC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#04BAEA',
            secondary: '#F4B71B',
          },
          button: {
            primary: '#04BAEA',
            secondary: '#F4B71B',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#33269D',
          },
        },
      };
    case 'Валькирия':
      return {
        type: 'Валькирия',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#1F2032',
            dim: '#17192D',
            dim60: '#202335',
            dim40: '#202234',
            dim20: '#1F2133',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#1F2032C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#8385B3',
            secondary: '#FEBB38',
          },
          button: {
            primary: '#4DA7FB',
            secondary: '#993CFB',
          },
          // background: {
          //   default: '#0A0D1C',///// НЕ ПОМЕНЯЛ
          // },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Чёрная Пантера':
      return {
        type: 'Чёрная Пантера',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#1D1F22',
            dim: '#3E4046',
            dim60: '#303237',
            dim40: '#2A2C30',
            dim20: '#232529',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#1D1F22C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#F1B80A',
          },
          button: {
            primary: '#3F8DFD',
            secondary: '#5859FA',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Доктор Стрэндж':
      return {
        type: 'Доктор Стрэндж',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#1000C3',
            dim: '#F5F7F7',
            dim60: '#9994E2',
            dim40: '#6B63D8',
            dim20: '#3D31CD',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#1000C3C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#1000C3',
            secondary: '#FF011D',
          },
          button: {
            primary: '#FF011D',
            secondary: '#FF011D',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#1000C3',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Веном':
      return {
        type: 'Веном',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#18192E',
            dim: '#2B2E53',
            dim60: '#232644',
            dim40: '#1F213C',
            dim20: '#1C1D35',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#18192EC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#35A0FF',
          },
          button: {
            primary: '#35A0FF',
            secondary: '#8C90FA',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Коллекционер':
      return {
        type: 'Коллекционер',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#DAE3EF',
            dim: '#E3EDF7',
            dim60: '#DFE8F3',
            dim40: '#DDE7F2',
            dim20: '#DBE4F0',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#DAE3EFC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#2C3F63',
            secondary: '#E81E38',
          },
          button: {
            primary: '#2C3F63',
            secondary: '#2C3F63',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#2C3F63',
          error: '#FF3854',
          title: {
            main: '#2C3F63',
          },
        },
      };
    case 'Равонна Рейнслейер':
      return {
        type: 'Равонна Рейнслейер',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#212832',
            dim: '#282E3A',
            dim60: '#252C37',
            dim40: '#232A35',
            dim20: '#222934',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#212832C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#0F1318',
            secondary: '#834173',
          },
          button: {
            primary: '#834173',
            secondary: '#E48478',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
        // CUSTOM GLOBAL STYLES
      };
    case 'Ронан Обвинитель':
      return {
        type: 'Ронан Обвинитель',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#06072C',
            dim: '#11143A',
            dim60: '#0C0E34',
            dim40: '#0A0C31',
            dim20: '#07092F',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#06072CC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#8086AE',
            secondary: '#FA544B',
          },
          button: {
            primary: '#42FCFF',
            secondary: '#FA544B',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#8086AE',
          },
        },
      };
    case 'Эго':
      return {
        type: 'Эго',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#62345B',
            dim: '#8C476A',
            dim60: '#7B3F64',
            dim40: '#723B60',
            dim20: '#6A375D',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#62345BC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#FFD03C',
          },
          button: {
            primary: '#1DD4DE',
            secondary: '#FFDF00',
          },
          // background: {
          //   default: '#0A0D1C',///// НЕ ПОМЕНЯЛ
          // },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Альтрон':
      return {
        type: 'Альтрон',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#D8E3F0',
            dim: '#E2EDF7',
            dim60: '#DEE8F4',
            dim40: '#DBE7F3',
            dim20: '#D9E4F1',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#D8E3F0C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#31456A',
            secondary: '#EF3D82',
          },
          button: {
            primary: '#EF3D82',
            secondary: '#EF3D82',
          },
          // background: {
          //   default: '#0A0D1C',///// НЕ ПОМЕНЯЛ
          // },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#31456A',
          error: '#FF3854',
          title: {
            main: '#31456A',
          },
        },
      };
    case 'Галактус':
      return {
        type: 'Галактус',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#442965',
            dim: '#664C8E',
            dim60: '#583E7D',
            dim40: '#513675',
            dim20: '#4A2F6C',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#442965C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#54CAF1',
          },
          button: {
            primary: '#54CAF1',
            secondary: '#906FC2',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    case 'Чарльз Ксавьер':
      return {
        type: 'Чарльз Ксавьер',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#2B2A30',
            dim: '#30363E',
            dim60: '#2E3038',
            dim40: '#2C2F35',
            dim20: '#2C2C32',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#2B2A30C2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#FFFFFF',
            secondary: '#28B766',
          },
          button: {
            primary: '#17C1F7',
            secondary: '#28B766',
          },
          // background: {
          //   default: '#0A0D1C',///// НЕ ПОМЕНЯЛ
          // },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
    default:
      return {
        type: 'Темная',
        breakpoints: {
          values: {
            xs: 0,
            sm: 500,
            md: 768,
            lg: 1024,
            xl: 1441,
          },
        },
        shadow: {
          primary: '0 2px 6px 0 rgba(0,0,0,0.50)',
          offer: '0px 0px 20px 8px rgb(0 0 0 / 50%)',
        },
        palette: {
          primary: {
            main: '#0A0D1C',
            dim: '#17192D',
            dim60: '#121426',
            dim40: '#0F1122',
            dim20: '#0D0F1F',
            backdrop: 'rgba(0,0,0,0.5)',
            backdropTable: '#0A0D1CC2',
          },
          rating: {
            default: '#FFFFFF',
            low: '#0aea83',
            middle: '#f5c800',
            high: '#f28918',
            danger: '#d13232',
          },
          icon: {
            main: '#717FB0',
            secondary: '#FFD03C',
          },
          button: {
            primary: '#286AF0',
            secondary: '#0AEA83',
          },
          accent: '#FF3854',
          green: '#1EC78E',
          blueLight20: '#717fb033',
          moderated: '#fec71b',
          moderated20: '#fec71b33',
          failed: '#d51e1e',
          failed20: '#d51e1e33',
          passed20: '#1a9d5933',
          danger: '#f28918',
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 10,
          color: '#FFFFFF',
          error: '#FF3854',
          title: {
            main: '#FFFFFF',
          },
        },
      };
  }
};
