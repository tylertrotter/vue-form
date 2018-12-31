import {EventBus} from "./event-bus";
export const goToPage = {
	data() {
		return {
			currentPage: 1,
			pageTitles: this.pages
		}
	},
	methods: {
		goto(num){
			const progressEl = document.querySelector('.c-page-progress');
			if(num < this.currentPage)
				progressEl.setAttribute('data-backwards', true);
			else
				progressEl.setAttribute('data-backwards', false);

			this.currentPage = num;
			EventBus.$emit("page-number-updated", this.currentPage);

			// Handle transition
			const form = this.$root.$el;

			// record form height
			let formHeight = form.clientHeight;

			let enterEl,
					leaveEl,
					enterElHeight,
					leaveElHeight,
					heightDiff;

			// set form to that height
			form.style.height = formHeight + "px";
			form.style.overflow = "hidden";

			// set enter and leave els to position absolute (Done in CSS)

			// Wait a tick for the transition to start
			setTimeout(function(){

				enterEl = document.querySelector(".transition-enter-active");
				leaveEl = document.querySelector(".transition-leave-active");

				// record height of leave and enter elements
				enterElHeight = enterEl.clientHeight;
				leaveElHeight = leaveEl.clientHeight;

				heightDiff = enterElHeight - leaveElHeight;

				// Set the form height to the new height after transition
				form.style.height = (formHeight + heightDiff) + "px";
			});

			// After the transition is over form height is set back to 'initial' by the page component.

		}
	}
}