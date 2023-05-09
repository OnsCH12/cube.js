cube(`g_caisse_users`, {
  sql_table: `dbo."GCaisseUsers"`,
  
  data_source: `default`,
  
  pre_aggregations: {
    // Pre-aggregation definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    username: {
      sql: `${CUBE}."UserName"`,
      type: `string`
    },
    
    userpassword: {
      sql: `${CUBE}."UserPassword"`,
      type: `string`
    },
    
    grid: {
      sql: `${CUBE}."GRID"`,
      type: `string`
    },
    
    userbloq: {
      sql: `${CUBE}."UserBloq"`,
      type: `string`
    },
    
    usersupp: {
      sql: `${CUBE}."UserSupp"`,
      type: `string`
    },
    
    userconnecte: {
      sql: `${CUBE}."UserConnecte"`,
      type: `string`
    },
    
    usercentre: {
      sql: `${CUBE}."UserCentre"`,
      type: `string`
    },
    
    userip: {
      sql: `${CUBE}."UserIP"`,
      type: `string`
    },
    
    usertype: {
      sql: `${CUBE}."UserType"`,
      type: `string`
    },
    
    idcentre: {
      sql: `${CUBE}."IDCentre"`,
      type: `string`
    },
    
    groupid: {
      sql: `${CUBE}."GroupID"`,
      type: `string`
    },
    
    chefhierarchique: {
      sql: `${CUBE}."ChefHierarchique"`,
      type: `string`
    },
    
    mailcollab: {
      sql: `${CUBE}."mailCollab"`,
      type: `string`
    },
    
    nameuser: {
      sql: `${CUBE}."nameUser"`,
      type: `string`
    },
    
    matemp: {
      sql: `${CUBE}."MatEmp"`,
      type: `string`
    },
    
    passwmail: {
      sql: `${CUBE}."PasswMail"`,
      type: `string`
    },
    
    signature: {
      sql: `${CUBE}."Signature"`,
      type: `string`
    },
    
    interim: {
      sql: `interim`,
      type: `string`
    },
    
    usermail: {
      sql: `${CUBE}."UserMail"`,
      type: `string`
    },
    
    adminmobile: {
      sql: `${CUBE}."AdminMobile"`,
      type: `string`
    },
    
    defaultdoc: {
      sql: `${CUBE}."DefaultDoc"`,
      type: `string`
    },
    
    usercaisse: {
      sql: `${CUBE}."UserCaisse"`,
      type: `string`
    },
    
    depot: {
      sql: `${CUBE}."Depot"`,
      type: `string`
    },
    
    mf: {
      sql: `${CUBE}."MF"`,
      type: `string`
    },
    
    ref: {
      sql: `${CUBE}."Ref"`,
      type: `string`
    },
    
    typecpt: {
      sql: `${CUBE}."TypeCpt"`,
      type: `string`
    }
  }
});
