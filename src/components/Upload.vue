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
		<div>Drop file here or click to upload</div>
		<div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
	</el-upload>
</template>

<script>
	import { Vue } from "../imports";
	import { Upload } from "element-ui";
	Vue.use(Upload);

	import IUpload from "./../assets/upload.svg";

	export default {
		name: "c-upload",
		components: { IUpload }
	}
</script>

<style lang="scss">
	.el-upload {
		@include bg-color($form-text);
		box-shadow: inset 0 0 0 $input-border-width*3 $form-bg;
		border: $input-border-width $input-border-color $upload-border-style;
		border-radius: $border-radius;
		padding: $gutter*.75;
		text-align: center;

		svg {
			width: 2em;
			margin-bottom: $gutter/3;

			path {
				fill: rgba($form-text, .5);
			}
		}
	}

	.el-upload__tip {
		@include helptext;
	}

	.el-upload__input {
    display: none;
}
</style>