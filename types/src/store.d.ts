export interface TemplateItem {
  class?: string;
  active?: boolean;
  style?: Record<string, any>;
  data?: any;
  moduleIndex?: number;
}

export type StyleMode = "style1" | "style2" | "style3" | "style4";

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
