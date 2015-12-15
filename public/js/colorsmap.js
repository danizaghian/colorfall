var colorsMap = {
	//row 1
	'0': '390000',
	'1': '710000',
	'2': '6e2d2f',
	'3': 'a26163',
	'4': 'd69596',
	'5': 'ffc8c9',
	'6': 'ff8f92',
	'7': 'dc5a5e',
	'8': 'ff4e57',
	'9': 'ff0000',
	'10': 'ff0000',
	'11': 'ff0000',
	'12': 'df0017',
	'13': 'df0000',
	'14': 'e00000',
	'15': 'a72300',
	'16': 'a80000',
	'17': 'a72028',
	//row 2
	'18': 'db5d19',
	'19': 'db5e00',
	'20': 'ff5200',
	'21': 'ff5300',
	'22': 'ff9500',
	'23': 'ff9400',
	'24': 'ff9258',
	'25': 'ffcb93',
	'26': 'd4985f',
	'27': 'd39a1c',
	'28': 'd39a00',
	'29': 'a16429',
	'30': 'a16500',
	'31': '6e3000',
	'32': 'ffcf00',
	'33': 'ffcf00',
	'34': 'ffce59',
	'35': 'f8ff00',
	//row 3
	'36': 'f8ff09',
	'37': 'f9ff5b',
	'38': 'faff94',
	'39': 'fcffca',
	'40': 'c8d160',
	'41': 'c7d321',
	'42': 'c6d300',
	'43': '959e00',
	'44': '959e2b',
	'45': 'c9cf97',
	'46': '969c64',
	'47': '313500',
	'48': '636a00',
	'49': '646930',
	'50': 'b2ff00',
	'51': 'b3ff26',
	'52': 'b4ff62',
	'53': '57ff00',
	//row 4
	'54': '58ff32',
	'55': '00ff13',
	'56': '5aff67',
	'57': 'b6ff98',
	'58': '82d465',
	'59': '80d52e',
	'60': '7fd600',
	'61': '4ba032',
	'62': '4aa100',
	'63': '0b6b34',
	'64': '046c03',
	'65': '00a20a',
	'66': '00d707',
	'67': '00d735',
	'68': '00ff38',
	'69': '00ff1b',
	'70': '00ff3b',
	'71': '00ff1d',
	//row 5
	'72': '00ff6a',
	'73': '5fff9b',
	'74': 'b9ffcd',
	'75': '00d668',
	'76': '00d838',
	'77': '00d915',
	'78': '00d813',
	'79': '00a236',
	'80': '003704',
	'81': '006d08',
	'82': '00a30e',
	'83': '00a237',
	'84': '00a068',
	'85': '4f9f67',
	'86': '85d29a',
	'87': '00ff3c',
	'88': '00ff6b',
	'89': '00ff6b',
	//row 6
	'90': '00ff9c',
	'91': '00ff9d',
	'92': '00ff9e',
	'93': '00d76a',
	'94': '00d769',
	'95': '00d915',
	'96': '006c35',
	'97': '00a169',
	'98': '00d59d',
	'99': '00d59c',
	'100': '0bd49b',
	'101': '66ffce',
	'102': '00ffd0',
	'103': '00ffd0',
	'104': '00ffd0',
	'105': '00ffff',
	'106': '00ffff',
	'107': '00ffff',
	//row 7
	'108': '6effff',
	'109': '28d0cf',
	'110': '00d1cf',
	'111': '00d2d0',
	'112': '006968',
	'113': '186868',
	'114': '009d9c',
	'115': '009d9c',
	'116': '549c9b',
	'117': '89cfce',
	'118': 'bdffff',
	'119': '8fcaff',
	'120': '3cccff',
	'121': '00cdff',
	'122': '00cdff',
	'123': '0091ff',
	'124': '1491ff',
	'125': '0099cf',
	//row 8
	'126': '0098cf',
	'127': '00649b',
	'128': '003534',
	'129': '002e68',
	'130': '1b1d9b',
	'131': '2f00cf',
	'132': '4100ff',
	'133': '005bcf',
	'134': '375acf',
	'135': '28639b',
	'136': '5c97cf',
	'137': '658fff',
	'138': '2a4cff',
	'139': '474bff',
	'140': '5600ff',
	'141': '4a00cf',
	'142': '401a9b',
	'143': '382c67',
	//row 9
	'144': '090034',
	'145': '180067',
	'146': '27009b',
	'147': '3700cf',
	'148': '4700ff',
	'149': '7847ff',
	'150': '7057ce',
	'151': '6a609a',
	'152': '9d94cd',
	'153': 'd0c7ff',
	'154': 'a28cff',
	'155': '8000ff',
	'156': '8000ff',
	'157': '5a00ff',
	'158': '4f00cf',
	'159': '45009b',
	'160': '3e0067',
	'161': '7900ce',
	//row 10
	'162': '7c00ce',
	'163': 'af00cd',
	'164': 'ae00cd',
	'165': 'e800ff',
	'166': 'e700ff',
	'167': 'e332ff',
	'168': 'dc88ff',
	'169': 'ad40ff',
	'170': 'b200ff',
	'171': 'b400ff',
	'172': 'a851cd',
	'173': '740c9a',
	'174': '77009a',
	'175': '3a0033',
	'176': '730065',
	'177': '702566',
	'178': 'ac0098',
	'179': 'aa0098',
	//row 11
	'180': 'e500cb',
	'181': 'e400cb',
	'182': 'e048cb',
	'183': 'a55b98',
	'184': 'd88fcb',
	'185': 'ffc3ff',
	'186': 'ff81fe',
	'187': 'ff12fe',
	'188': 'ff00fe',
	'189': 'ff00fe',
	'190': 'ff00c8',
	'191': 'ff00c8',
	'192': '71002f',
	'193': 'aa0062',
	'194': 'a81263',
	'195': 'e30095',
	'196': 'e20096',
	'197': 'ff37c9',
	//row 12
	'198': 'de5396',
	'199': 'ff89c9',
	'200': 'ff4692',
	'201': 'ff0092',
	'202': 'ff0092',
	'203': 'ff0057',
	'204': 'ff0056',
	'205': 'ff0000',
	'206': 'e00016',
	'207': 'a90027',
	'208': 'e1005e',
	'209': 'e0005e',
	'210': '030303',
	'211': '333333',
	'212': '666666',
	'213': '999999',
	'214': 'cccccc',
	'215': 'eeeeee',
};
