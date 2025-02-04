const url = 'http://192.168.40.51:8000/api/'

export const Api = [
    {
        HomePage:url+'homepage',
        Profile : url+'profile'
    },
    {
        PostSellDice : url+'sell-dice',
        EarnDtsList : url+'earn-dts'
    },
    {
        PostConnectWallet : url+'connect-wallet'
    },
    {
        GamePage : url+'games',
        PostDiceNumber : url+'roll-dice'
    }
]