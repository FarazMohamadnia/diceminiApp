const url = 'http://192.168.40.51:8000/api/'

export const Api = [
    {
        HomePage:url+'homepage/',
        Profile : url+'profile/',
        luckyBoard : url+'lucky-board/'
    },
    {
        PostSellDice : url+'sell-dice/',
        EarnDtsList : url+'earn-dts/'
    },
    {
        PostConnectWallet : url+'connect-wallet/',
        notification : url+'notification/',
        PostAuth : url+'auth/'
    },
    {
        GamePage : url+'games/',
        PostDiceNumber : url+'roll-dice/' ,
        tonusd : url+'ton-usd/',
        tondts : url+'dts-ton/',
        diceTon : url+'dice-ton/',
        PostDeposit : url+'deposit/',
        PostBuyDts : url+'buy-dts/',
        PostSellDice : url+'sell-dice/'
    }
]