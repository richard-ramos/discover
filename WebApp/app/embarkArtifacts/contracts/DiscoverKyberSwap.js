import EmbarkJS from '../embarkjs';

const DiscoverKyberSwapConfig = {"logger":{"events":{"_events":{"blockchain:started":[null,null,null,null,null,null,null,null,null],"storage:started":[null,null]},"_eventsCount":101,"_maxListeners":350},"logLevels":["error","warn","info","debug","trace"],"logLevel":"info","context":["build"]},"abiDefinition":[{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3cebb823"},{"constant":false,"inputs":[{"name":"_walletId","type":"address"}],"name":"setWalletId","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x46479541"},{"constant":true,"inputs":[{"name":"srcToken","type":"address"},{"name":"srcQty","type":"uint256"}],"name":"getConversionRates","outputs":[{"name":"expectedRate","type":"uint256"},{"name":"slippageRate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x65fbde90"},{"constant":true,"inputs":[],"name":"discover","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x7d8d6a68"},{"constant":true,"inputs":[],"name":"ETH","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8322fff2"},{"constant":true,"inputs":[],"name":"maxSlippage","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8c04166f"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_token","type":"address"},{"name":"_amount","type":"uint256"}],"name":"downvote","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0xa415e564"},{"constant":true,"inputs":[],"name":"walletId","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc162ba2f"},{"constant":true,"inputs":[],"name":"SNT","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc55a02a0"},{"constant":true,"inputs":[],"name":"kyberProxy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf0eeed81"},{"constant":false,"inputs":[{"name":"_maxSlippage","type":"uint256"}],"name":"setSlippage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf0fa55a9"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf77c4791"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_token","type":"address"},{"name":"_amount","type":"uint256"}],"name":"upvote","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0xfbeb0fae"},{"inputs":[{"name":"_discover","type":"address"},{"name":"_kyberProxy","type":"address"},{"name":"_ETH","type":"address"},{"name":"_SNT","type":"address"},{"name":"_walletId","type":"address"},{"name":"_maxSlippage","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"prevWalletId","type":"address"},{"indexed":false,"name":"newWalletId","type":"address"}],"name":"WalletIdChanged","type":"event","signature":"0x45d04c87f3c794b3747a407caf049bc6c0c363e22483848d05b1d2d8ed7652db"},{"anonymous":false,"inputs":[{"indexed":false,"name":"maxSlippage","type":"uint256"}],"name":"SlippageUpdated","type":"event","signature":"0xf5a802650e0a86db227cc342f06327d2ca0ff5cf2b12e0084fc5d8a7db2c54fd"}],"deployedAddress":"0x2768fa55551d6BAc23eA54469DC554C55c619384","className":"DiscoverKyberSwap","args":["0x68027D0D5Abb718f83c6c597bC1AE51c64073eF0","0x818E6FECD516Ecc3849DAf6845e3EC868087B755","0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","0xbF5d8683b9BE6C43fcA607eb2a6f2626A18837a6","0x0000000000000000000000000000000000000000",20],"gas":1054944,"gasPrice":"10000000000","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"6080604052600436106100df576000357c010000000000000000000000000000000000000000000000000000000090048063a415e5641161009c578063f0eeed8111610076578063f0eeed8114610267578063f0fa55a91461027c578063f77c4791146102a6578063fbeb0fae146102bb576100df565b8063a415e5641461020b578063c162ba2f1461023d578063c55a02a014610252576100df565b80633cebb823146100e4578063464795411461011957806365fbde901461014c5780637d8d6a681461019e5780638322fff2146101cf5780638c04166f146101e4575b600080fd5b3480156100f057600080fd5b506101176004803603602081101561010757600080fd5b5035600160a060020a03166102ed565b005b34801561012557600080fd5b506101176004803603602081101561013c57600080fd5b5035600160a060020a031661037e565b34801561015857600080fd5b506101856004803603604081101561016f57600080fd5b50600160a060020a03813516906020013561045b565b6040805192835260208301919091528051918290030190f35b3480156101aa57600080fd5b506101b361053d565b60408051600160a060020a039092168252519081900360200190f35b3480156101db57600080fd5b506101b361054c565b3480156101f057600080fd5b506101f961055b565b60408051918252519081900360200190f35b6101176004803603606081101561022157600080fd5b50803590600160a060020a036020820135169060400135610561565b34801561024957600080fd5b506101b36105f8565b34801561025e57600080fd5b506101b3610607565b34801561027357600080fd5b506101b3610616565b34801561028857600080fd5b506101176004803603602081101561029f57600080fd5b5035610625565b3480156102b257600080fd5b506101b36106cf565b610117600480360360608110156102d157600080fd5b50803590600160a060020a0360208201351690604001356106de565b600054600160a060020a0316331461034f576040805160e560020a62461bcd02815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600054600160a060020a031633146103e0576040805160e560020a62461bcd02815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b60055460408051338152600160a060020a03928316602082015291831682820152517f45d04c87f3c794b3747a407caf049bc6c0c363e22483848d05b1d2d8ed7652db9181900360600190a16005805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600080600160a060020a038416151561047d57600254600160a060020a031693505b600354600154604080517f809a9e55000000000000000000000000000000000000000000000000000000008152600160a060020a0388811660048301529283166024820152604481018790528151929093169263809a9e559260648083019392829003018186803b1580156104f157600080fd5b505afa158015610505573d6000803e3d6000fd5b505050506040513d604081101561051b57600080fd5b50805160209091015190925090506000821161053657600080fd5b9250929050565b600454600160a060020a031681565b600254600160a060020a031681565b60065481565b600061056d8383610757565b60048054604080517fac7690900000000000000000000000000000000000000000000000000000000081529283018890526024830184905251929350600160a060020a03169163ac7690909160448082019260009290919082900301818387803b1580156105da57600080fd5b505af11580156105ee573d6000803e3d6000fd5b5050505050505050565b600554600160a060020a031681565b600154600160a060020a031681565b600354600160a060020a031681565b600054600160a060020a03163314610687576040805160e560020a62461bcd02815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b6064811061069457600080fd5b60068190556040805182815290517ff5a802650e0a86db227cc342f06327d2ca0ff5cf2b12e0084fc5d8a7db2c54fd9181900360200190a150565b600054600160a060020a031681565b60006106ea8383610757565b60048054604080517f2b3df6900000000000000000000000000000000000000000000000000000000081529283018890526024830184905251929350600160a060020a031691632b3df6909160448082019260009290919082900301818387803b1580156105da57600080fd5b600154600090819081908190600160a060020a03908116908716158061078a5750600254600160a060020a038881169116145b156108f8573486146107e6576040805160e560020a62461bcd02815260206004820152600e60248201527f4e6f7420656e6f75676820455448000000000000000000000000000000000000604482015290519081900360640190fd5b6002546107fc90600160a060020a03168761045b565b9094509250836064840281151561080f57fe5b046064039150600654821115151561082657600080fd5b600354600254600154600554604080517fcb3c28c7000000000000000000000000000000000000000000000000000000008152600160a060020a039485166004820152602481018c90529284166044840152306064840152600019608484015260a4830189905290831660c483015251919092169163cb3c28c791899160e48082019260209290919082900301818588803b1580156108c457600080fd5b505af11580156108d8573d6000803e3d6000fd5b50505050506040513d60208110156108ef57600080fd5b50519450610c74565b604080517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810188905290518891600160a060020a038316916323b872dd916064808201926020929091908290030181600087803b15801561096957600080fd5b505af115801561097d573d6000803e3d6000fd5b505050506040513d602081101561099357600080fd5b505115156109a057600080fd5b600154600160a060020a03898116911614610c6e576003546040805160e060020a63095ea7b3028152600160a060020a03928316600482015260006024820181905291519284169263095ea7b392604480840193602093929083900390910190829087803b158015610a1157600080fd5b505af1158015610a25573d6000803e3d6000fd5b505050506040513d6020811015610a3b57600080fd5b50511515610a93576040805160e560020a62461bcd02815260206004820152601e60248201527f436f756c64206e6f7420726573657420746f6b656e20617070726f76616c0000604482015290519081900360640190fd5b6003546040805160e060020a63095ea7b3028152600160a060020a039283166004820152602481018a905290519183169163095ea7b3916044808201926020929091908290030181600087803b158015610aec57600080fd5b505af1158015610b00573d6000803e3d6000fd5b505050506040513d6020811015610b1657600080fd5b50511515610b6e576040805160e560020a62461bcd02815260206004820152601e60248201527f436f756c64206e6f7420617070726f766520746f6b656e20616d6f756e740000604482015290519081900360640190fd5b610b78888861045b565b90955093508460648502811515610b8b57fe5b0460640392506006548311151515610ba257600080fd5b600354600154600554604080517fcb3c28c7000000000000000000000000000000000000000000000000000000008152600160a060020a038d81166004830152602482018d90529384166044820152306064820152600019608482015260a481018a905291831660c483015251919092169163cb3c28c79160e48083019260209291908290030181600087803b158015610c3b57600080fd5b505af1158015610c4f573d6000803e3d6000fd5b505050506040513d6020811015610c6557600080fd5b50519550610c72565b8695505b505b841515610ccb576040805160e560020a62461bcd02815260206004820152601760248201527f4e6f7420656e6f75676820534e5420666f7220766f7465000000000000000000604482015290519081900360640190fd5b600480546040805160e060020a63095ea7b3028152600160a060020a039283169381019390935260006024840181905290519184169263095ea7b39260448083019360209383900390910190829087803b158015610d2857600080fd5b505af1158015610d3c573d6000803e3d6000fd5b505050506040513d6020811015610d5257600080fd5b50511515610daa576040805160e560020a62461bcd02815260206004820152601c60248201527f436f756c64206e6f7420726573657420534e5420617070726f76616c00000000604482015290519081900360640190fd5b600480546040805160e060020a63095ea7b3028152600160a060020a039283169381019390935260248301889052519083169163095ea7b39160448083019260209291908290030181600087803b158015610e0457600080fd5b505af1158015610e18573d6000803e3d6000fd5b505050506040513d6020811015610e2e57600080fd5b50511515610e86576040805160e560020a62461bcd02815260206004820152601c60248201527f436f756c64206e6f7420617070726f766520534e5420616d6f756e7400000000604482015290519081900360640190fd5b505050509291505056fea165627a7a72305820","realArgs":[],"code":"608060405234801561001057600080fd5b5060405160c080610fa0833981018060405260c081101561003057600080fd5b508051602082015160408301516060840151608085015160a09095015160008054600160a060020a0319163317905593949293919290916064811061007457600080fd5b60048054600160a060020a0319908116600160a060020a0398891617909155600380548216968816969096179095556002805486169487169490941790935560018054851692861692909217909155600580549093169316929092179055600655610ebc806100e46000396000f3fe6080604052600436106100df576000357c010000000000000000000000000000000000000000000000000000000090048063a415e5641161009c578063f0eeed8111610076578063f0eeed8114610267578063f0fa55a91461027c578063f77c4791146102a6578063fbeb0fae146102bb576100df565b8063a415e5641461020b578063c162ba2f1461023d578063c55a02a014610252576100df565b80633cebb823146100e4578063464795411461011957806365fbde901461014c5780637d8d6a681461019e5780638322fff2146101cf5780638c04166f146101e4575b600080fd5b3480156100f057600080fd5b506101176004803603602081101561010757600080fd5b5035600160a060020a03166102ed565b005b34801561012557600080fd5b506101176004803603602081101561013c57600080fd5b5035600160a060020a031661037e565b34801561015857600080fd5b506101856004803603604081101561016f57600080fd5b50600160a060020a03813516906020013561045b565b6040805192835260208301919091528051918290030190f35b3480156101aa57600080fd5b506101b361053d565b60408051600160a060020a039092168252519081900360200190f35b3480156101db57600080fd5b506101b361054c565b3480156101f057600080fd5b506101f961055b565b60408051918252519081900360200190f35b6101176004803603606081101561022157600080fd5b50803590600160a060020a036020820135169060400135610561565b34801561024957600080fd5b506101b36105f8565b34801561025e57600080fd5b506101b3610607565b34801561027357600080fd5b506101b3610616565b34801561028857600080fd5b506101176004803603602081101561029f57600080fd5b5035610625565b3480156102b257600080fd5b506101b36106cf565b610117600480360360608110156102d157600080fd5b50803590600160a060020a0360208201351690604001356106de565b600054600160a060020a0316331461034f576040805160e560020a62461bcd02815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600054600160a060020a031633146103e0576040805160e560020a62461bcd02815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b60055460408051338152600160a060020a03928316602082015291831682820152517f45d04c87f3c794b3747a407caf049bc6c0c363e22483848d05b1d2d8ed7652db9181900360600190a16005805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600080600160a060020a038416151561047d57600254600160a060020a031693505b600354600154604080517f809a9e55000000000000000000000000000000000000000000000000000000008152600160a060020a0388811660048301529283166024820152604481018790528151929093169263809a9e559260648083019392829003018186803b1580156104f157600080fd5b505afa158015610505573d6000803e3d6000fd5b505050506040513d604081101561051b57600080fd5b50805160209091015190925090506000821161053657600080fd5b9250929050565b600454600160a060020a031681565b600254600160a060020a031681565b60065481565b600061056d8383610757565b60048054604080517fac7690900000000000000000000000000000000000000000000000000000000081529283018890526024830184905251929350600160a060020a03169163ac7690909160448082019260009290919082900301818387803b1580156105da57600080fd5b505af11580156105ee573d6000803e3d6000fd5b5050505050505050565b600554600160a060020a031681565b600154600160a060020a031681565b600354600160a060020a031681565b600054600160a060020a03163314610687576040805160e560020a62461bcd02815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b6064811061069457600080fd5b60068190556040805182815290517ff5a802650e0a86db227cc342f06327d2ca0ff5cf2b12e0084fc5d8a7db2c54fd9181900360200190a150565b600054600160a060020a031681565b60006106ea8383610757565b60048054604080517f2b3df6900000000000000000000000000000000000000000000000000000000081529283018890526024830184905251929350600160a060020a031691632b3df6909160448082019260009290919082900301818387803b1580156105da57600080fd5b600154600090819081908190600160a060020a03908116908716158061078a5750600254600160a060020a038881169116145b156108f8573486146107e6576040805160e560020a62461bcd02815260206004820152600e60248201527f4e6f7420656e6f75676820455448000000000000000000000000000000000000604482015290519081900360640190fd5b6002546107fc90600160a060020a03168761045b565b9094509250836064840281151561080f57fe5b046064039150600654821115151561082657600080fd5b600354600254600154600554604080517fcb3c28c7000000000000000000000000000000000000000000000000000000008152600160a060020a039485166004820152602481018c90529284166044840152306064840152600019608484015260a4830189905290831660c483015251919092169163cb3c28c791899160e48082019260209290919082900301818588803b1580156108c457600080fd5b505af11580156108d8573d6000803e3d6000fd5b50505050506040513d60208110156108ef57600080fd5b50519450610c74565b604080517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810188905290518891600160a060020a038316916323b872dd916064808201926020929091908290030181600087803b15801561096957600080fd5b505af115801561097d573d6000803e3d6000fd5b505050506040513d602081101561099357600080fd5b505115156109a057600080fd5b600154600160a060020a03898116911614610c6e576003546040805160e060020a63095ea7b3028152600160a060020a03928316600482015260006024820181905291519284169263095ea7b392604480840193602093929083900390910190829087803b158015610a1157600080fd5b505af1158015610a25573d6000803e3d6000fd5b505050506040513d6020811015610a3b57600080fd5b50511515610a93576040805160e560020a62461bcd02815260206004820152601e60248201527f436f756c64206e6f7420726573657420746f6b656e20617070726f76616c0000604482015290519081900360640190fd5b6003546040805160e060020a63095ea7b3028152600160a060020a039283166004820152602481018a905290519183169163095ea7b3916044808201926020929091908290030181600087803b158015610aec57600080fd5b505af1158015610b00573d6000803e3d6000fd5b505050506040513d6020811015610b1657600080fd5b50511515610b6e576040805160e560020a62461bcd02815260206004820152601e60248201527f436f756c64206e6f7420617070726f766520746f6b656e20616d6f756e740000604482015290519081900360640190fd5b610b78888861045b565b90955093508460648502811515610b8b57fe5b0460640392506006548311151515610ba257600080fd5b600354600154600554604080517fcb3c28c7000000000000000000000000000000000000000000000000000000008152600160a060020a038d81166004830152602482018d90529384166044820152306064820152600019608482015260a481018a905291831660c483015251919092169163cb3c28c79160e48083019260209291908290030181600087803b158015610c3b57600080fd5b505af1158015610c4f573d6000803e3d6000fd5b505050506040513d6020811015610c6557600080fd5b50519550610c72565b8695505b505b841515610ccb576040805160e560020a62461bcd02815260206004820152601760248201527f4e6f7420656e6f75676820534e5420666f7220766f7465000000000000000000604482015290519081900360640190fd5b600480546040805160e060020a63095ea7b3028152600160a060020a039283169381019390935260006024840181905290519184169263095ea7b39260448083019360209383900390910190829087803b158015610d2857600080fd5b505af1158015610d3c573d6000803e3d6000fd5b505050506040513d6020811015610d5257600080fd5b50511515610daa576040805160e560020a62461bcd02815260206004820152601c60248201527f436f756c64206e6f7420726573657420534e5420617070726f76616c00000000604482015290519081900360640190fd5b600480546040805160e060020a63095ea7b3028152600160a060020a039283169381019390935260248301889052519083169163095ea7b39160448083019260209291908290030181600087803b158015610e0457600080fd5b505af1158015610e18573d6000803e3d6000fd5b505050506040513d6020811015610e2e57600080fd5b50511515610e86576040805160e560020a62461bcd02815260206004820152601c60248201527f436f756c64206e6f7420617070726f766520534e5420616d6f756e7400000000604482015290519081900360640190fd5b505050509291505056fea165627a7a72305820ef5b1d5f5993d0c0d49021d4485448d5763b992071080b368bcd8196ec190d340029","runtimeBytecode":"6080604052600436106100df576000357c010000000000000000000000000000000000000000000000000000000090048063a415e5641161009c578063f0eeed8111610076578063f0eeed8114610267578063f0fa55a91461027c578063f77c4791146102a6578063fbeb0fae146102bb576100df565b8063a415e5641461020b578063c162ba2f1461023d578063c55a02a014610252576100df565b80633cebb823146100e4578063464795411461011957806365fbde901461014c5780637d8d6a681461019e5780638322fff2146101cf5780638c04166f146101e4575b600080fd5b3480156100f057600080fd5b506101176004803603602081101561010757600080fd5b5035600160a060020a03166102ed565b005b34801561012557600080fd5b506101176004803603602081101561013c57600080fd5b5035600160a060020a031661037e565b34801561015857600080fd5b506101856004803603604081101561016f57600080fd5b50600160a060020a03813516906020013561045b565b6040805192835260208301919091528051918290030190f35b3480156101aa57600080fd5b506101b361053d565b60408051600160a060020a039092168252519081900360200190f35b3480156101db57600080fd5b506101b361054c565b3480156101f057600080fd5b506101f961055b565b60408051918252519081900360200190f35b6101176004803603606081101561022157600080fd5b50803590600160a060020a036020820135169060400135610561565b34801561024957600080fd5b506101b36105f8565b34801561025e57600080fd5b506101b3610607565b34801561027357600080fd5b506101b3610616565b34801561028857600080fd5b506101176004803603602081101561029f57600080fd5b5035610625565b3480156102b257600080fd5b506101b36106cf565b610117600480360360608110156102d157600080fd5b50803590600160a060020a0360208201351690604001356106de565b600054600160a060020a0316331461034f576040805160e560020a62461bcd02815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600054600160a060020a031633146103e0576040805160e560020a62461bcd02815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b60055460408051338152600160a060020a03928316602082015291831682820152517f45d04c87f3c794b3747a407caf049bc6c0c363e22483848d05b1d2d8ed7652db9181900360600190a16005805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600080600160a060020a038416151561047d57600254600160a060020a031693505b600354600154604080517f809a9e55000000000000000000000000000000000000000000000000000000008152600160a060020a0388811660048301529283166024820152604481018790528151929093169263809a9e559260648083019392829003018186803b1580156104f157600080fd5b505afa158015610505573d6000803e3d6000fd5b505050506040513d604081101561051b57600080fd5b50805160209091015190925090506000821161053657600080fd5b9250929050565b600454600160a060020a031681565b600254600160a060020a031681565b60065481565b600061056d8383610757565b60048054604080517fac7690900000000000000000000000000000000000000000000000000000000081529283018890526024830184905251929350600160a060020a03169163ac7690909160448082019260009290919082900301818387803b1580156105da57600080fd5b505af11580156105ee573d6000803e3d6000fd5b5050505050505050565b600554600160a060020a031681565b600154600160a060020a031681565b600354600160a060020a031681565b600054600160a060020a03163314610687576040805160e560020a62461bcd02815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b6064811061069457600080fd5b60068190556040805182815290517ff5a802650e0a86db227cc342f06327d2ca0ff5cf2b12e0084fc5d8a7db2c54fd9181900360200190a150565b600054600160a060020a031681565b60006106ea8383610757565b60048054604080517f2b3df6900000000000000000000000000000000000000000000000000000000081529283018890526024830184905251929350600160a060020a031691632b3df6909160448082019260009290919082900301818387803b1580156105da57600080fd5b600154600090819081908190600160a060020a03908116908716158061078a5750600254600160a060020a038881169116145b156108f8573486146107e6576040805160e560020a62461bcd02815260206004820152600e60248201527f4e6f7420656e6f75676820455448000000000000000000000000000000000000604482015290519081900360640190fd5b6002546107fc90600160a060020a03168761045b565b9094509250836064840281151561080f57fe5b046064039150600654821115151561082657600080fd5b600354600254600154600554604080517fcb3c28c7000000000000000000000000000000000000000000000000000000008152600160a060020a039485166004820152602481018c90529284166044840152306064840152600019608484015260a4830189905290831660c483015251919092169163cb3c28c791899160e48082019260209290919082900301818588803b1580156108c457600080fd5b505af11580156108d8573d6000803e3d6000fd5b50505050506040513d60208110156108ef57600080fd5b50519450610c74565b604080517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810188905290518891600160a060020a038316916323b872dd916064808201926020929091908290030181600087803b15801561096957600080fd5b505af115801561097d573d6000803e3d6000fd5b505050506040513d602081101561099357600080fd5b505115156109a057600080fd5b600154600160a060020a03898116911614610c6e576003546040805160e060020a63095ea7b3028152600160a060020a03928316600482015260006024820181905291519284169263095ea7b392604480840193602093929083900390910190829087803b158015610a1157600080fd5b505af1158015610a25573d6000803e3d6000fd5b505050506040513d6020811015610a3b57600080fd5b50511515610a93576040805160e560020a62461bcd02815260206004820152601e60248201527f436f756c64206e6f7420726573657420746f6b656e20617070726f76616c0000604482015290519081900360640190fd5b6003546040805160e060020a63095ea7b3028152600160a060020a039283166004820152602481018a905290519183169163095ea7b3916044808201926020929091908290030181600087803b158015610aec57600080fd5b505af1158015610b00573d6000803e3d6000fd5b505050506040513d6020811015610b1657600080fd5b50511515610b6e576040805160e560020a62461bcd02815260206004820152601e60248201527f436f756c64206e6f7420617070726f766520746f6b656e20616d6f756e740000604482015290519081900360640190fd5b610b78888861045b565b90955093508460648502811515610b8b57fe5b0460640392506006548311151515610ba257600080fd5b600354600154600554604080517fcb3c28c7000000000000000000000000000000000000000000000000000000008152600160a060020a038d81166004830152602482018d90529384166044820152306064820152600019608482015260a481018a905291831660c483015251919092169163cb3c28c79160e48083019260209291908290030181600087803b158015610c3b57600080fd5b505af1158015610c4f573d6000803e3d6000fd5b505050506040513d6020811015610c6557600080fd5b50519550610c72565b8695505b505b841515610ccb576040805160e560020a62461bcd02815260206004820152601760248201527f4e6f7420656e6f75676820534e5420666f7220766f7465000000000000000000604482015290519081900360640190fd5b600480546040805160e060020a63095ea7b3028152600160a060020a039283169381019390935260006024840181905290519184169263095ea7b39260448083019360209383900390910190829087803b158015610d2857600080fd5b505af1158015610d3c573d6000803e3d6000fd5b505050506040513d6020811015610d5257600080fd5b50511515610daa576040805160e560020a62461bcd02815260206004820152601c60248201527f436f756c64206e6f7420726573657420534e5420617070726f76616c00000000604482015290519081900360640190fd5b600480546040805160e060020a63095ea7b3028152600160a060020a039283169381019390935260248301889052519083169163095ea7b39160448083019260209291908290030181600087803b158015610e0457600080fd5b505af1158015610e18573d6000803e3d6000fd5b505050506040513d6020811015610e2e57600080fd5b50511515610e86576040805160e560020a62461bcd02815260206004820152601c60248201527f436f756c64206e6f7420617070726f766520534e5420616d6f756e7400000000604482015290519081900360640190fd5b505050509291505056fea165627a7a72305820ef5b1d5f5993d0c0d49021d4485448d5763b992071080b368bcd8196ec190d340029","linkReferences":{},"swarmHash":"ef5b1d5f5993d0c0d49021d4485448d5763b992071080b368bcd8196ec190d34","gasEstimates":{"creation":{"codeDepositCost":"754400","executionCost":"142612","totalCost":"897012"},"external":{"ETH()":"645","SNT()":"623","changeController(address)":"20878","controller()":"622","discover()":"623","downvote(bytes32,address,uint256)":"infinite","getConversionRates(address,uint256)":"infinite","kyberProxy()":"578","maxSlippage()":"514","setSlippage(uint256)":"21626","setWalletId(address)":"22791","upvote(bytes32,address,uint256)":"infinite","walletId()":"601"},"internal":{"_tradeTokens(address,uint256)":"infinite"}},"functionHashes":{"ETH()":"8322fff2","SNT()":"c55a02a0","changeController(address)":"3cebb823","controller()":"f77c4791","discover()":"7d8d6a68","downvote(bytes32,address,uint256)":"a415e564","getConversionRates(address,uint256)":"65fbde90","kyberProxy()":"f0eeed81","maxSlippage()":"8c04166f","setSlippage(uint256)":"f0fa55a9","setWalletId(address)":"46479541","upvote(bytes32,address,uint256)":"fbeb0fae","walletId()":"c162ba2f"},"filename":"/home/ryann/Documents/Repos/Status/forks/discover/.embark/Contracts/contracts/DiscoverKyberSwap.sol","originalFilename":"Contracts/contracts/DiscoverKyberSwap.sol","path":"/home/ryann/Documents/Repos/Status/forks/discover/Contracts/contracts/DiscoverKyberSwap.sol","type":"file","deploymentAccount":"0x65767f95799109BA028e0397aDD89b0eF637E444","transactionHash":"0x48e83601d94b7b7dbd906cf2a07014a7eafd3b9f1bcde38e66efed75411eaecc"};
const DiscoverKyberSwap = new EmbarkJS.Blockchain.Contract(DiscoverKyberSwapConfig);

export default DiscoverKyberSwap;
