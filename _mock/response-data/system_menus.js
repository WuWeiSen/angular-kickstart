var menus = [
    {
        id: 6, parentId: null, text: '个人信息管理', name: '个人信息管理', menuType: 0, menuUrl: '',
        children: [
            { id: 7, parentId: 6, text: '我的信息', name: '我的信息', menuType: 0, menuUrl: 'profile.mine' },
            { id: 8, parentId: 6, text: '联系地址', name: '联系地址', menuType: 0, menuUrl: 'profile.address' },
            { id: 9, parentId: 6, text: '常用旅卡', name: '常用旅卡', menuType: 0, menuUrl: 'profile.card' }
        ]
    },
    {
        id: 1, parentId: null, text: '组织信息管理', name: '组织信息管理', menuType: 0, menuUrl: '',
        children: [
            { id: 2, parentId: 1, text: '组织信息', name: '组织信息', menuType: 0, menuUrl: 'company.baseinfo.show' },
            { id: 3, parentId: 1, text: '部门及员工信息', name: '部门及员工信息', menuType: 0, menuUrl: 'company.branch' },
            { id: 4, parentId: 1, text: '岗位信息', name: '岗位信息', menuType: 0, menuUrl: 'company.position' },
            { id: 5, parentId: 1, text: '角色信息', name: '角色信息', menuType: 0, menuUrl: 'company.role' },
            { id: 6, parentId: 1, text: '加入企业审批', name: '加入企业审批', menuType: 0, menuUrl: 'company.applications' }
        ]
    },
    {
        id: 8, parentId: null, text: '系统信息管理', name: '系统信息管理', menuType: 0, menuUrl: '',
        children: [
            { id: 9, parentId: 8, text: '系统菜单信息', name: '系统菜单信息', menuType: 0, menuUrl: 'system.menu' },
            { id: 10, parentId: 8, text: '组织认证审核', name: '组织认证审核', menuType: 0, menuUrl: 'system.certification' },
            { id: 11, parentId: 8, text: '系统管理员设置', name: '系统管理员设置', menuType: 0, menuUrl: 'system.setting' },
        ]
    }
];

module.exports = menus;
