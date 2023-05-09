cube(`g_caisse_entet_ticket`, {
  sql_table: `dbo."GCaisseEntetTicket"`,
  
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
    tiannee: {
      sql: `${CUBE}."TiAnnee"`,
      type: `string`
    },
    
    refbasesix: {
      sql: `${CUBE}."RefBaseSix"`,
      type: `string`
    },
    
    titype: {
      sql: `${CUBE}."TiType"`,
      type: `string`
    },
    
    tireference: {
      sql: `${CUBE}."TiReference"`,
      type: `string`
    },
    
    tirefcaisse: {
      sql: `${CUBE}."TiRefCaisse"`,
      type: `string`
    },
    
    tidate: {
      sql: `${CUBE}."TiDate"`,
      type: `string`
    },
    
    titiers: {
      sql: `${CUBE}."TiTiers"`,
      type: `string`
    },
    
    titotalht: {
      sql: `${CUBE}."TiTotalHT"`,
      type: `string`
    },
    
    titotalremise: {
      sql: `${CUBE}."TiTotalRemise"`,
      type: `string`
    },
    
    titimbre: {
      sql: `${CUBE}."TiTimbre"`,
      type: `string`
    },
    
    titotaltva: {
      sql: `${CUBE}."TiTotalTVA"`,
      type: `string`
    },
    
    timontant: {
      sql: `${CUBE}."TiMontant"`,
      type: `string`
    },
    
    timodepaie: {
      sql: `${CUBE}."TiModePaie"`,
      type: `string`
    },
    
    tirefpaie: {
      sql: `${CUBE}."TiRefPaie"`,
      type: `string`
    },
    
    tiuser: {
      sql: `${CUBE}."TiUser"`,
      type: `string`
    },
    
    tietat: {
      sql: `${CUBE}."TiEtat"`,
      type: `string`
    },
    
    tidateecheance: {
      sql: `${CUBE}."TiDateEcheance"`,
      type: `string`
    },
    
    tidateversement: {
      sql: `${CUBE}."TiDateVersement"`,
      type: `string`
    },
    
    tidateimpaye: {
      sql: `${CUBE}."TiDateImpaye"`,
      type: `string`
    },
    
    tidatereglement: {
      sql: `${CUBE}."TiDateReglement"`,
      type: `string`
    },
    
    tirefext: {
      sql: `${CUBE}."TiRefExt"`,
      type: `string`
    },
    
    tinumdoc: {
      sql: `${CUBE}."TiNumDoc"`,
      type: `string`
    },
    
    ticommentaire: {
      sql: `${CUBE}."TiCommentaire"`,
      type: `string`
    },
    
    timntlettre: {
      sql: `${CUBE}."TiMntLettre"`,
      type: `string`
    },
    
    titxfodec: {
      sql: `${CUBE}."TiTxFodec"`,
      type: `string`
    },
    
    tifodec: {
      sql: `${CUBE}."TiFodec"`,
      type: `string`
    },
    
    tirefprojet: {
      sql: `${CUBE}."TiRefProjet"`,
      type: `string`
    },
    
    tirespensable: {
      sql: `${CUBE}."TiRespensable"`,
      type: `string`
    },
    
    tibeneficaire: {
      sql: `${CUBE}."TiBeneficaire"`,
      type: `string`
    },
    
    tinumcompte: {
      sql: `${CUBE}."TiNumCompte"`,
      type: `string`
    },
    
    lettrage: {
      sql: `${CUBE}."Lettrage"`,
      type: `string`
    },
    
    avrqlett: {
      sql: `${CUBE}."AVRQLett"`,
      type: `string`
    },
    
    tirefprojet2: {
      sql: `${CUBE}."TiRefProjet2"`,
      type: `string`
    },
    
    representant: {
      sql: `${CUBE}."Representant"`,
      type: `string`
    },
    
    nom_identif: {
      sql: `nom_identif`,
      type: `string`
    },
    
    identif: {
      sql: `identif`,
      type: `string`
    },
    
    titauxretenu: {
      sql: `${CUBE}."TiTauxRetenu"`,
      type: `string`
    },
    
    tiretenu: {
      sql: `${CUBE}."TiRetenu"`,
      type: `string`
    },
    
    tinetapayer: {
      sql: `${CUBE}."TiNetaPayer"`,
      type: `string`
    },
    
    id3: {
      sql: `id3`,
      type: `string`
    },
    
    tibanquetiers: {
      sql: `${CUBE}."TiBanqueTiers"`,
      type: `string`
    },
    
    tiretenuegaranti: {
      sql: `${CUBE}."TiRetenueGaranti"`,
      type: `string`
    },
    
    titauxavance: {
      sql: `${CUBE}."TiTauxAvance"`,
      type: `string`
    },
    
    tivalavance: {
      sql: `${CUBE}."TiValAvance"`,
      type: `string`
    },
    
    ardesignation: {
      sql: `${CUBE}."ARDesignation"`,
      type: `string`
    },
    
    titauxrem: {
      sql: `${CUBE}."TiTauxRem"`,
      type: `string`
    },
    
    tivalrem: {
      sql: `${CUBE}."TiValRem"`,
      type: `string`
    },
    
    tipropcheque: {
      sql: `${CUBE}."TiPropCheque"`,
      type: `string`
    },
    
    tidatepreav: {
      sql: `${CUBE}."TiDatePreav"`,
      type: `string`
    },
    
    txretgar: {
      sql: `${CUBE}."TxRetGar"`,
      type: `string`
    },
    
    valretgar: {
      sql: `${CUBE}."valRetGar"`,
      type: `string`
    },
    
    txrettva: {
      sql: `${CUBE}."TxRetTVA"`,
      type: `string`
    },
    
    valrettva: {
      sql: `${CUBE}."valRetTVA"`,
      type: `string`
    },
    
    titotalexo: {
      sql: `${CUBE}."TiTotalExo"`,
      type: `string`
    },
    
    tidevise: {
      sql: `${CUBE}."TiDevise"`,
      type: `string`
    },
    
    titxdevise: {
      sql: `${CUBE}."TiTxDevise"`,
      type: `string`
    },
    
    arrondtotal: {
      sql: `${CUBE}."ArrondTotal"`,
      type: `string`
    },
    
    tichauffeur: {
      sql: `${CUBE}."TiChauffeur"`,
      type: `string`
    },
    
    tivehicule: {
      sql: `${CUBE}."TiVehicule"`,
      type: `string`
    },
    
    recu: {
      sql: `${CUBE}."Recu"`,
      type: `string`
    },
    
    rendu: {
      sql: `${CUBE}."Rendu"`,
      type: `string`
    },
    
    rs: {
      sql: `${CUBE}."RS"`,
      type: `string`
    },
    
    tietatcommande: {
      sql: `${CUBE}."TiEtatCommande"`,
      type: `string`
    },
    
    valremg: {
      sql: `${CUBE}."valRemG"`,
      type: `string`
    },
    
    titournet: {
      sql: `${CUBE}."TiTournet"`,
      type: `string`
    },
    
    cartefidelite: {
      sql: `${CUBE}."CarteFidelite"`,
      type: `string`
    },
    
    txautretaxe: {
      sql: `${CUBE}."TxAutreTaxe"`,
      type: `string`
    },
    
    mntautretaxe: {
      sql: `${CUBE}."MntAutreTaxe"`,
      type: `string`
    },
    
    tivalide: {
      sql: `${CUBE}."TiValide"`,
      type: `string`
    },
    
    contrat: {
      sql: `${CUBE}."Contrat"`,
      type: `string`
    },
    
    duree: {
      sql: `duree`,
      type: `string`
    },
    
    tipaiementetranger: {
      sql: `${CUBE}."TiPaiementEtranger"`,
      type: `string`
    },
    
    tidiffere: {
      sql: `${CUBE}."TiDiffere"`,
      type: `string`
    },
    
    tidatechargement: {
      sql: `${CUBE}."TiDateChargement"`,
      type: `string`
    },
    
    tidateouverture: {
      sql: `${CUBE}."TiDateOuverture"`,
      type: `string`
    },
    
    txtaxe2013: {
      sql: `${CUBE}."TxTaxe2013"`,
      type: `string`
    },
    
    tidatevalid: {
      sql: `${CUBE}."TiDateValid"`,
      type: `string`
    },
    
    mntnet: {
      sql: `${CUBE}."MntNet"`,
      type: `string`
    },
    
    rgnet: {
      sql: `${CUBE}."RGNet"`,
      type: `string`
    },
    
    avnet: {
      sql: `${CUBE}."AvNet"`,
      type: `string`
    },
    
    retnet: {
      sql: `${CUBE}."RetNet"`,
      type: `string`
    },
    
    remnet: {
      sql: `${CUBE}."RemNet"`,
      type: `string`
    },
    
    rettvanet: {
      sql: `${CUBE}."RetTVANet"`,
      type: `string`
    },
    
    tiprelevement: {
      sql: `${CUBE}."TiPrelevement"`,
      type: `string`
    },
    
    ticalculbesoins: {
      sql: `${CUBE}."TiCalculBesoins"`,
      type: `string`
    },
    
    tinumprelev: {
      sql: `${CUBE}."TiNumPrelev"`,
      type: `string`
    },
    
    timontantdeduit: {
      sql: `${CUBE}."TiMontantDeduit"`,
      type: `string`
    },
    
    timontpaye: {
      sql: `${CUBE}."TiMontPaye"`,
      type: `string`
    },
    
    tinbchiffre: {
      sql: `${CUBE}."TiNbChiffre"`,
      type: `string`
    },
    
    tirecu: {
      sql: `${CUBE}."Tirecu"`,
      type: `string`
    },
    
    timp: {
      sql: `${CUBE}."TiMP"`,
      type: `string`
    },
    
    tilivrp: {
      sql: `${CUBE}."TiLivrP"`,
      type: `string`
    },
    
    tiremarques: {
      sql: `${CUBE}."TiRemarques"`,
      type: `string`
    },
    
    wfvalide: {
      sql: `${CUBE}."WFValide"`,
      type: `string`
    },
    
    prorata: {
      sql: `${CUBE}."Prorata"`,
      type: `string`
    },
    
    retdec: {
      sql: `${CUBE}."RetDec"`,
      type: `string`
    },
    
    valprorata: {
      sql: `${CUBE}."valProrata"`,
      type: `string`
    },
    
    valretdec: {
      sql: `${CUBE}."valRetDec"`,
      type: `string`
    },
    
    tiannuler: {
      sql: `${CUBE}."TiAnnuler"`,
      type: `string`
    },
    
    numdom: {
      sql: `${CUBE}."NumDom"`,
      type: `string`
    },
    
    dateci: {
      sql: `${CUBE}."DateCI"`,
      type: `string`
    },
    
    banquenego: {
      sql: `${CUBE}."BanqueNego"`,
      type: `string`
    },
    
    datenego: {
      sql: `${CUBE}."DateNego"`,
      type: `string`
    },
    
    verrou: {
      sql: `${CUBE}."VERROU"`,
      type: `string`
    },
    
    encaiss: {
      sql: `${CUBE}."Encaiss"`,
      type: `string`
    },
    
    timvtbanque: {
      sql: `${CUBE}."TiMvtBanque"`,
      type: `string`
    },
    
    tirapp: {
      sql: `${CUBE}."TiRapp"`,
      type: `string`
    },
    
    ticentre: {
      sql: `${CUBE}."TiCentre"`,
      type: `string`
    },
    
    ticaissedest: {
      sql: `${CUBE}."TiCaisseDest"`,
      type: `string`
    },
    
    refat: {
      sql: `${CUBE}."RefAT"`,
      type: `string`
    },
    
    txdeviseactu: {
      sql: `${CUBE}."TxDeviseActu"`,
      type: `string`
    },
    
    reftc: {
      sql: `${CUBE}."RefTC"`,
      type: `string`
    },
    
    negociateur: {
      sql: `${CUBE}."Negociateur"`,
      type: `string`
    },
    
    idbord: {
      sql: `${CUBE}."IDBord"`,
      type: `string`
    },
    
    idnav: {
      sql: `${CUBE}."IDNav"`,
      type: `string`
    },
    
    avnancesoumis: {
      sql: `${CUBE}."AvnanceSoumis"`,
      type: `string`
    },
    
    avnancensoumis: {
      sql: `${CUBE}."AvnanceNSoumis"`,
      type: `string`
    },
    
    rettrc: {
      sql: `${CUBE}."RetTRC"`,
      type: `string`
    },
    
    valrettrc: {
      sql: `${CUBE}."valRetTRC"`,
      type: `string`
    },
    
    iddossier: {
      sql: `${CUBE}."IDDossier"`,
      type: `string`
    },
    
    typgar: {
      sql: `${CUBE}."TypGar"`,
      type: `string`
    },
    
    idaut: {
      sql: `${CUBE}."IDAut"`,
      type: `string`
    },
    
    refrs: {
      sql: `${CUBE}."RefRS"`,
      type: `string`
    },
    
    txconvertion: {
      sql: `${CUBE}."TxConvertion"`,
      type: `string`
    },
    
    pjointe: {
      sql: `${CUBE}."PJointe"`,
      type: `string`
    },
    
    categdoc: {
      sql: `${CUBE}."CategDoc"`,
      type: `string`
    },
    
    timodlivr: {
      sql: `${CUBE}."TiModLivr"`,
      type: `string`
    },
    
    avanceappro: {
      sql: `${CUBE}."AvanceAppro"`,
      type: `string`
    },
    
    rgappro: {
      sql: `${CUBE}."RGAppro"`,
      type: `string`
    },
    
    prorataappro: {
      sql: `${CUBE}."ProrataAppro"`,
      type: `string`
    },
    
    retdecappro: {
      sql: `${CUBE}."RetDecAppro"`,
      type: `string`
    },
    
    trcappro: {
      sql: `${CUBE}."TRCAppro"`,
      type: `string`
    },
    
    wfresponsable: {
      sql: `${CUBE}."WFResponsable"`,
      type: `string`
    },
    
    lettragep: {
      sql: `${CUBE}."LettrageP"`,
      type: `string`
    },
    
    rabaisappro: {
      sql: `${CUBE}."RabaisAppro"`,
      type: `string`
    },
    
    refgp: {
      sql: `${CUBE}."RefGP"`,
      type: `string`
    },
    
    refec: {
      sql: `${CUBE}."RefEC"`,
      type: `string`
    },
    
    numatt: {
      sql: `${CUBE}."NumAtt"`,
      type: `string`
    },
    
    tivalavanceht: {
      sql: `${CUBE}."TiValAvanceHT"`,
      type: `string`
    },
    
    ticompteur: {
      sql: `${CUBE}."TiCompteur"`,
      type: `string`
    },
    
    gmtypepanne: {
      sql: `${CUBE}."GMTypePanne"`,
      type: `string`
    },
    
    gmtypemnt: {
      sql: `${CUBE}."GMTypeMnt"`,
      type: `string`
    },
    
    gmreforg: {
      sql: `${CUBE}."GMRefOrg"`,
      type: `string`
    },
    
    gminterv: {
      sql: `${CUBE}."GMInterv"`,
      type: `string`
    },
    
    gmtempsrep: {
      sql: `${CUBE}."GMTempsRep"`,
      type: `string`
    },
    
    gmdescdoc: {
      sql: `${CUBE}."GMDescDoc"`,
      type: `string`
    },
    
    coders: {
      sql: `${CUBE}."CodeRS"`,
      type: `string`
    },
    
    baseav: {
      sql: `${CUBE}."BaseAv"`,
      type: `string`
    },
    
    baserg: {
      sql: `${CUBE}."BaseRG"`,
      type: `string`
    },
    
    basetrc: {
      sql: `${CUBE}."BaseTRC"`,
      type: `string`
    },
    
    basedec: {
      sql: `${CUBE}."BaseDec"`,
      type: `string`
    },
    
    basepro: {
      sql: `${CUBE}."BasePro"`,
      type: `string`
    },
    
    refdocorg: {
      sql: `${CUBE}."RefDocOrg"`,
      type: `string`
    },
    
    idop: {
      sql: `${CUBE}."idOP"`,
      type: `string`
    },
    
    tirecfonction: {
      sql: `${CUBE}."TiRecFonction"`,
      type: `string`
    },
    
    tirecobjectif: {
      sql: `${CUBE}."TiRecObjectif"`,
      type: `string`
    },
    
    tirecprofil: {
      sql: `${CUBE}."TirecProfil"`,
      type: `string`
    },
    
    tireccompetence: {
      sql: `${CUBE}."TiRecCompetence"`,
      type: `string`
    },
    
    tirecexperience: {
      sql: `${CUBE}."TiRecExperience"`,
      type: `string`
    },
    
    tirecdelai: {
      sql: `${CUBE}."TiRecDelai"`,
      type: `string`
    },
    
    tirecperiode: {
      sql: `${CUBE}."TirecPeriode"`,
      type: `string`
    },
    
    recucaisse: {
      sql: `${CUBE}."recuCaisse"`,
      type: `string`
    },
    
    titypeeval: {
      sql: `${CUBE}."TitypeEval"`,
      type: `string`
    },
    
    idmnt: {
      sql: `${CUBE}."IDMnt"`,
      type: `string`
    },
    
    typact: {
      sql: `${CUBE}."TypAct"`,
      type: `string`
    },
    
    categact: {
      sql: `${CUBE}."CategAct"`,
      type: `string`
    },
    
    actavecrisque: {
      sql: `${CUBE}."ActAvecRisque"`,
      type: `string`
    },
    
    actrisque: {
      sql: `${CUBE}."ActRisque"`,
      type: `string`
    },
    
    actsyst: {
      sql: `${CUBE}."ActSyst"`,
      type: `string`
    },
    
    idind: {
      sql: `${CUBE}."IDInd"`,
      type: `string`
    },
    
    valind: {
      sql: `${CUBE}."ValIND"`,
      type: `string`
    },
    
    valcible: {
      sql: `${CUBE}."ValCible"`,
      type: `string`
    },
    
    idsociete: {
      sql: `${CUBE}."IDSociete"`,
      type: `string`
    },
    
    tideclar: {
      sql: `${CUBE}."TiDeclar"`,
      type: `string`
    },
    
    moisdecl: {
      sql: `${CUBE}."MoisDecL"`,
      type: `string`
    },
    
    anneedecl: {
      sql: `${CUBE}."AnneeDecL"`,
      type: `string`
    },
    
    tirefdocaut: {
      sql: `${CUBE}."TiRefDocAut"`,
      type: `string`
    },
    
    tiobjectif: {
      sql: `${CUBE}."TiObjectif"`,
      type: `string`
    },
    
    tidimension: {
      sql: `${CUBE}."TiDimension"`,
      type: `string`
    },
    
    tipoids: {
      sql: `${CUBE}."TiPoids"`,
      type: `string`
    },
    
    tidatecreate: {
      sql: `${CUBE}."TiDateCreate"`,
      type: `string`
    },
    
    titimecreate: {
      sql: `${CUBE}."TiTimeCreate"`,
      type: `string`
    },
    
    tirefot: {
      sql: `${CUBE}."TiRefOT"`,
      type: `string`
    },
    
    tiquittance: {
      sql: `${CUBE}."TiQuittance"`,
      type: `string`
    },
    
    gmtyperep: {
      sql: `${CUBE}."GMTypeRep"`,
      type: `string`
    },
    
    gmfournisseur: {
      sql: `${CUBE}."GMFournisseur"`,
      type: `string`
    },
    
    gmdatedm: {
      sql: `${CUBE}."GMDateDM"`,
      type: `string`
    },
    
    gmheuredm: {
      sql: `${CUBE}."GMHeureDM"`,
      type: `string`
    },
    
    gmdatebtr: {
      sql: `${CUBE}."GMDateBTR"`,
      type: `string`
    },
    
    gmheurebtr: {
      sql: `${CUBE}."GMHeureBTR"`,
      type: `string`
    },
    
    gmbtrcloture: {
      sql: `${CUBE}."GMBTRCloture"`,
      type: `string`
    },
    
    indop: {
      sql: `${CUBE}."IndOp"`,
      type: `string`
    },
    
    datelivr: {
      sql: `${CUBE}."DateLivr"`,
      type: `string`
    },
    
    mntbo: {
      sql: `${CUBE}."MntBO"`,
      type: `string`
    },
    
    idcontrat: {
      sql: `${CUBE}."idContrat"`,
      type: `string`
    },
    
    tidatecompta: {
      sql: `${CUBE}."TiDateCompta"`,
      type: `string`
    },
    
    tirefom: {
      sql: `${CUBE}."TiRefOM"`,
      type: `string`
    },
    
    tidateannule: {
      sql: `${CUBE}."TiDAteAnnule"`,
      type: `string`
    },
    
    tirefclot: {
      sql: `${CUBE}."TirefClot"`,
      type: `string`
    },
    
    tiobservdoc: {
      sql: `${CUBE}."TiObservDoc"`,
      type: `string`
    },
    
    tidocaff: {
      sql: `${CUBE}."TiDocAff"`,
      type: `string`
    },
    
    ticommentaire1: {
      sql: `${CUBE}."TiCommentaire1"`,
      type: `string`
    },
    
    ticommentaire2: {
      sql: `${CUBE}."TiCommentaire2"`,
      type: `string`
    },
    
    tiefficacite: {
      sql: `${CUBE}."TiEfficacite"`,
      type: `string`
    },
    
    compteinteg: {
      sql: `${CUBE}."CompteInteg"`,
      type: `string`
    },
    
    enca: {
      sql: `${CUBE}."EnCA"`,
      type: `string`
    },
    
    compteca: {
      sql: `${CUBE}."CompteCA"`,
      type: `string`
    },
    
    idsync: {
      sql: `${CUBE}."IDSync"`,
      type: `string`
    },
    
    token: {
      sql: `${CUBE}."Token"`,
      type: `string`
    },
    
    txretfr: {
      sql: `${CUBE}."TxRetFR"`,
      type: `string`
    },
    
    valretfr: {
      sql: `${CUBE}."valRetFR"`,
      type: `string`
    },
    
    txrettrav: {
      sql: `${CUBE}."TxRetTrav"`,
      type: `string`
    },
    
    valrettrav: {
      sql: `${CUBE}."valRetTrav"`,
      type: `string`
    },
    
    basefr: {
      sql: `${CUBE}."BaseFR"`,
      type: `string`
    },
    
    basetrav: {
      sql: `${CUBE}."BaseTrav"`,
      type: `string`
    },
    
    periode: {
      sql: `${CUBE}."Periode"`,
      type: `string`
    },
    
    montantinter: {
      sql: `${CUBE}."MontantInter"`,
      type: `string`
    },
    
    mntprincipal: {
      sql: `${CUBE}."MntPrincipal"`,
      type: `string`
    },
    
    mntcom: {
      sql: `${CUBE}."MntCom"`,
      type: `string`
    },
    
    mnttvacom: {
      sql: `${CUBE}."MntTVACom"`,
      type: `string`
    },
    
    mntautrefrais: {
      sql: `${CUBE}."MntAutreFrais"`,
      type: `string`
    },
    
    mnttimbre: {
      sql: `${CUBE}."MntTimbre"`,
      type: `string`
    },
    
    tidaterecep: {
      sql: `${CUBE}."TidateRecep"`,
      type: `string`
    },
    
    ticlot: {
      sql: `${CUBE}."TiClot"`,
      type: `string`
    },
    
    idopfrais: {
      sql: `${CUBE}."idOpFrais"`,
      type: `string`
    },
    
    txtvaop: {
      sql: `${CUBE}."TxTvaOP"`,
      type: `string`
    },
    
    idfrais: {
      sql: `${CUBE}."idFrais"`,
      type: `string`
    },
    
    tiribdest: {
      sql: `${CUBE}."TiRibDest"`,
      type: `string`
    },
    
    txtvatrc: {
      sql: `${CUBE}."TxTVATRC"`,
      type: `string`
    },
    
    tvatrc: {
      sql: `${CUBE}."TVATRC"`,
      type: `string`
    },
    
    rsavance: {
      sql: `${CUBE}."RSAvance"`,
      type: `string`
    },
    
    tidateov: {
      sql: `${CUBE}."TiDateOV"`,
      type: `string`
    },
    
    tipaiesalaire: {
      sql: `${CUBE}."TiPaieSalaire"`,
      type: `string`
    },
    
    ofstatus: {
      sql: `${CUBE}."OFStatus"`,
      type: `string`
    },
    
    ofpriorite: {
      sql: `${CUBE}."OFPriorite"`,
      type: `string`
    },
    
    noninteg: {
      sql: `${CUBE}."NonInteg"`,
      type: `string`
    },
    
    tilocalisation: {
      sql: `${CUBE}."TiLocalisation"`,
      type: `string`
    },
    
    wfstatitem: {
      sql: `${CUBE}."WFStatItem"`,
      type: `string`
    },
    
    datedebaut: {
      sql: `${CUBE}."DateDebAut"`,
      type: `string`
    },
    
    timedebaut: {
      sql: `${CUBE}."TimeDebAut"`,
      type: `string`
    },
    
    datefinaut: {
      sql: `${CUBE}."DateFinAut"`,
      type: `string`
    },
    
    timefinaut: {
      sql: `${CUBE}."TimeFinAut"`,
      type: `string`
    },
    
    notaffectanal: {
      sql: `${CUBE}."NotAffectAnal"`,
      type: `string`
    },
    
    nbmoisanal: {
      sql: `${CUBE}."NbMoisAnal"`,
      type: `string`
    },
    
    timarge: {
      sql: `${CUBE}."TiMarge"`,
      type: `string`
    },
    
    verrextr: {
      sql: `${CUBE}."VerrExtr"`,
      type: `string`
    }
  }
});
