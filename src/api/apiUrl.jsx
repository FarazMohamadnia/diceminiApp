// const url = 'https://main.dicemaniacs.com/api/'
const url = 'http://192.168.40.20:8000/api/'

export const Api = [
    {
        HomePage:url+'homepage/',
        Profile : url+'profile/',
        luckyBoard : url+'lucky-board/',
        combos : url+'combo-boxes/'
    },
    {
        PostSellDice : url+'sell-dice/',
        EarnDtsList : url+'earn-dts/',
        referrals : url+'referrals/',
        referralCode : url+'referral-code/'
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
        PostSellDice : url+'sell-dice/',
    },
    {
        withdrawsTable : url+'withdraws-table/',
        depositsTable : url+'deposits-table/',
        transactions : url+'transactions/',
        PostWithdraw : url+'withdraw/'
    }
]