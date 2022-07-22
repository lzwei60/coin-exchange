/**
 * 类数组
 */
export interface Property {
  [propName: string]: any
  [propName: number]: any
}

/**
 * 菜单数组
 */
export type MenuType = {
  // 菜单id
  menu_id: string,
  // 路径
  path: string,
  // 菜单名称
  name: string,
  // 重定向路径
  redirect?: string,
  // 图标
  icon?: string,
  // 标题
  title?: string,
  // 菜单描述
  description?: string
}
