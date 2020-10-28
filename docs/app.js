const app = Vue.createApp({
	data() {
		return {
			standardRequirement: 0,
			totalBillings: 0,
			commissionableBillings: 0,
			commission: 0,
		};
	},
	methods: {
		calcComBill() {
			this.commissionableBillings =
				this.totalBillings - this.standardRequirement;
			if (this.commissionableBillings <= 0) {
				this.commission = "No Comms I'm afraid :(";
			} else if (
				// if billings over SR are between 0 - 29999, commision is paid at 20%
				this.commissionableBillings > 0 &&
				this.commissionableBillings <= 30000
			) {
				this.commission = this.commissionableBillings * 0.2;
			} else if (this.commissionableBillings > 30000) {
				billings = this.commissionableBillings;
				firstTierComms = 6000;
				secondTierComms = billings - 30000;
				finalComms = secondTierComms * 0.3;
				this.commission = firstTierComms + finalComms;
			}
		},
	},
});

app.mount("#app");
