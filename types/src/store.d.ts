export interface TemplateItem {
  class?: string;
  active?: boolean;
  style?: Record<string, any>;
}

export interface NavItem {
  title: string;
  linkType: number;
  link: string;
  icon: string;
  subNav: NavItem[]
}

export interface UserInfo {
  name: string;
}
export interface SettingState {
  templateList: TemplateItem[];
  navList: NavItem[];
}

export interface UserState {
  userInfo: Record<string, any>;
}

export interface RootState {
  setting: SettingState;
}
