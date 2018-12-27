<!--
	 :on-preview="handlePreview"
	 :on-remove="handleRemove"
	:file-list="fileList"
-->

<template>
	<el-upload
		drag
		action="https://jsonplaceholder.typicode.com/posts/"
		multiple>
		<i-upload />
		<div><c-button tabindex="-1">Upload</c-button> or drop files here</div>
		<div class="c-helptext" slot="tip">jpg/png files with a size less than 500kb</div>
	</el-upload>
</template>

<script>
	import { Vue } from "../imports";
	import { Upload } from "element-ui";
	import CButton from "./Button.vue";
	Vue.use(Upload);

	import IUpload from "./../assets/upload.svg";

	export default {
		name: "c-upload",
		components: { IUpload, CButton }
	}
</script>

<style lang="scss">
	@import "../sass/theme-chalk-master/src/upload";

	.el-upload {


		svg {
			width: 2em;
			margin-bottom: $gutter/3;

			path {
				fill: rgba($form-text, .5);
			}
		}

		button {
			background: $btn-secondary-bg;
			color: $btn-secondary-text;
			padding: $button-padding/2;
			border-radius: $button-border-radius;
			outline: 1px solid $form-bg;
			font-size: $input-font-size;
		}
	}

	.el-upload__input {
    display: none;
	}

	// .el-upload-list {
	// 	li{
	// 		position: relative;
	// 	}
	// }

	// .el-icon-close-tip {
	// 		display: none;
	// 		font-size: $small-text;
	// 		position: absolute;
	// 		right: 0;
	// 		top: .15em;
	// 		background: $form-bg;
	// 	}

	// .focusing:not(:hover) .el-icon-close-tip {
	// 	display: block;
	// }

	.is-uploading .el-icon-close:before {
		display: none;
	}

	.el-icon-document {
		@include check();
		display: inline-block;
		width: 1.3em;
		height: 1.3em;
		vertical-align: middle;
		margin: 0 .2em;
	}

</style>