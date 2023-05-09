cube(`g_caisse_tiers`, {
  sql_table: `dbo."GCaisseTiers"`,
  
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
    refbase: {
      sql: `${CUBE}."RefBase"`,
      type: `string`
    },
    
    trreference: {
      sql: `${CUBE}."TrReference"`,
      type: `string`
    },
    
    trnom: {
      sql: `${CUBE}."TrNom"`,
      type: `string`
    },
    
    trprenom: {
      sql: `${CUBE}."TrPrenom"`,
      type: `string`
    },
    
    trraisonsocial: {
      sql: `${CUBE}."TrRaisonSocial"`,
      type: `string`
    },
    
    tradresse: {
      sql: `${CUBE}."TrAdresse"`,
      type: `string`
    },
    
    trcodepostal: {
      sql: `${CUBE}."TrCodePostal"`,
      type: `string`
    },
    
    trville: {
      sql: `${CUBE}."TrVille"`,
      type: `string`
    },
    
    trcreditmax: {
      sql: `${CUBE}."TrCreditMax"`,
      type: `string`
    },
    
    trcategorie: {
      sql: `${CUBE}."TrCategorie"`,
      type: `string`
    },
    
    trremise: {
      sql: `${CUBE}."TrRemise"`,
      type: `string`
    },
    
    trmatfiscal: {
      sql: `${CUBE}."TrMatFiscal"`,
      type: `string`
    },
    
    trrue: {
      sql: `${CUBE}."TrRue"`,
      type: `string`
    },
    
    trmat1: {
      sql: `${CUBE}."TrMat1"`,
      type: `string`
    },
    
    trmat2: {
      sql: `${CUBE}."TrMat2"`,
      type: `string`
    },
    
    trmat3: {
      sql: `${CUBE}."TrMat3"`,
      type: `string`
    },
    
    trmat4: {
      sql: `${CUBE}."TrMat4"`,
      type: `string`
    },
    
    trrib: {
      sql: `${CUBE}."TrRIB"`,
      type: `string`
    },
    
    trbanque: {
      sql: `${CUBE}."TrBanque"`,
      type: `string`
    },
    
    integration: {
      sql: `${CUBE}."Integration"`,
      type: `string`
    },
    
    cin: {
      sql: `${CUBE}."CIN"`,
      type: `string`
    },
    
    cheque: {
      sql: `${CUBE}."Cheque"`,
      type: `string`
    },
    
    traite: {
      sql: `${CUBE}."Traite"`,
      type: `string`
    },
    
    paiement: {
      sql: `paiement`,
      type: `string`
    },
    
    jourp: {
      sql: `${CUBE}."JourP"`,
      type: `string`
    },
    
    moisp: {
      sql: `${CUBE}."moisP"`,
      type: `string`
    },
    
    bloq: {
      sql: `${CUBE}."Bloq"`,
      type: `string`
    },
    
    trfidelite: {
      sql: `${CUBE}."TRFidelite"`,
      type: `string`
    },
    
    trdelairecep: {
      sql: `${CUBE}."TrDelaiRecep"`,
      type: `string`
    },
    
    trterme: {
      sql: `${CUBE}."TrTerme"`,
      type: `string`
    },
    
    trvisible: {
      sql: `${CUBE}."TRVisible"`,
      type: `string`
    },
    
    exo: {
      sql: `${CUBE}."Exo"`,
      type: `string`
    },
    
    nass: {
      sql: `${CUBE}."NAss"`,
      type: `string`
    },
    
    comptecred: {
      sql: `${CUBE}."CompteCred"`,
      type: `string`
    },
    
    tinomar: {
      sql: `${CUBE}."TiNomAr"`,
      type: `string`
    },
    
    tiprenomar: {
      sql: `${CUBE}."TiPrenomAr"`,
      type: `string`
    },
    
    tiadrar: {
      sql: `${CUBE}."TiAdrAr"`,
      type: `string`
    },
    
    tilcinar: {
      sql: `${CUBE}."TiLCinAr"`,
      type: `string`
    },
    
    trregroup: {
      sql: `${CUBE}."TrRegroup"`,
      type: `string`
    },
    
    trcharge: {
      sql: `${CUBE}."TrCharge"`,
      type: `string`
    },
    
    tel1: {
      sql: `${CUBE}."TEL1"`,
      type: `string`
    },
    
    tel2: {
      sql: `${CUBE}."TEL2"`,
      type: `string`
    },
    
    dec: {
      sql: `${CUBE}."DEC"`,
      type: `string`
    },
    
    devisetiers: {
      sql: `${CUBE}."DeviseTiers"`,
      type: `string`
    },
    
    typetiers: {
      sql: `${CUBE}."TypeTiers"`,
      type: `string`
    },
    
    moypaie: {
      sql: `${CUBE}."MoyPaie"`,
      type: `string`
    },
    
    trswift: {
      sql: `${CUBE}."TrSwift"`,
      type: `string`
    },
    
    typecli: {
      sql: `${CUBE}."TypeCli"`,
      type: `string`
    },
    
    trforf: {
      sql: `${CUBE}."TrForf"`,
      type: `string`
    },
    
    numexo: {
      sql: `${CUBE}."NumExo"`,
      type: `string`
    },
    
    datedebexo: {
      sql: `${CUBE}."DateDebExo"`,
      type: `string`
    },
    
    datefinexo: {
      sql: `${CUBE}."DateFinExo"`,
      type: `string`
    },
    
    trassurance: {
      sql: `${CUBE}."TrAssurance"`,
      type: `string`
    },
    
    tractivite: {
      sql: `${CUBE}."TrActivite"`,
      type: `string`
    },
    
    trrc: {
      sql: `${CUBE}."TrRC"`,
      type: `string`
    },
    
    trresp: {
      sql: `${CUBE}."TrResp"`,
      type: `string`
    },
    
    trcategprix: {
      sql: `${CUBE}."TrCategPrix"`,
      type: `string`
    },
    
    trretsource: {
      sql: `${CUBE}."TrRetSource"`,
      type: `string`
    },
    
    trtypeidclient: {
      sql: `${CUBE}."TrTypeIDClient"`,
      type: `string`
    },
    
    trautreidclient: {
      sql: `${CUBE}."TrAutreIDClient"`,
      type: `string`
    },
    
    tridclient: {
      sql: `${CUBE}."TrIDClient"`,
      type: `string`
    },
    
    trpays: {
      sql: `${CUBE}."TrPays"`,
      type: `string`
    },
    
    trcompteinter: {
      sql: `${CUBE}."TrCompteInter"`,
      type: `string`
    },
    
    trcomptecom: {
      sql: `${CUBE}."TrCompteCom"`,
      type: `string`
    },
    
    trcompteautfrais: {
      sql: `${CUBE}."TrCompteAutFrais"`,
      type: `string`
    },
    
    comptemoyterme: {
      sql: `${CUBE}."compteMoyTerme"`,
      type: `string`
    },
    
    trlocalisation: {
      sql: `${CUBE}."TrLocalisation"`,
      type: `string`
    },
    
    wfstatitem: {
      sql: `${CUBE}."WFStatItem"`,
      type: `string`
    },
    
    trseuilrisque: {
      sql: `${CUBE}."TrSeuilRisque"`,
      type: `string`
    },
    
    trzone: {
      sql: `${CUBE}."TrZone"`,
      type: `string`
    },
    
    trtypelivr: {
      sql: `${CUBE}."TrTypeLivr"`,
      type: `string`
    }
  }
});
