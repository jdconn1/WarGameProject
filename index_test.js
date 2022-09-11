const expect = chai.expect;


describe("War Game function test.", function() {
    describe("Game Function", function() {
        it ("Should check to see if correct arrays are being compared.", function() {
            const myFunction = game(player1, player2)
            expect(myFunction).to.equal(this.playerDeck);
        });
        it("Should throw an error if the correct arrays are not being compared.", function(){
            expect(function(){
                game(1, player2);
            }).to.throw(Error);
        });
    });
});