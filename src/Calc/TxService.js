
class TxService {

    constructor() {
        this.players = [];
    }

    addPlayer(name, initialAmount) {

        let newPlayer = {
            id: this.players.length,
            name: name,
            total: initialAmount,
            tx: [ { id:0, ammount: initialAmount } ]
        }

        this.players.push(newPlayer);
    }

    setDefaultConfiguration() {
        this.addPlayer("Scott", 5000);
        this.addPlayer("Michelle", 5000);
        this.addPlayer("Gabe", 5000);
        this.addPlayer("Matthew", 5000);
    }

    getPlayers() {
        return this.players;
    }

    getPlayer(playerId) {
        for(let i=0; i < this.players.length; i++) {
            if(this.player[i].id == playerId) return this.player[i];
        }
    }

    addTx(playerId, amount) {
        let targetPlayer = getPlayer(playerId);
        if(targetPlayer) {
            let newTx = { id: tartgetPlayer.tx.length, amount: amount };
            targetPlayer.tx.push(newTx);
            targetPlayer.total += amount;    
        }
    }

    removeLastTx(playerId) {
        let targetPlayer = getPlayer(playerId);
        if(targetPlayer && targetPlayer.tx.length > 0) {
            let txLength = targetPlayer.tx.length;
            targetPlayer.total -= targetPlayer.tx[txLength - 1];
            targetPlayer.tx.splice(txLength - 1);
        }
    }
}

const txService = new TxService();

export default txService;
