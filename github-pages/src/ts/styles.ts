export default {
	background: {
		grid: `bgi=linear-gradient(#ddd_2px,transparent_2px),linear-gradient(90deg,#ddd_2px,transparent_2px),linear-gradient(#dddddd4d_1px,transparent_1px),linear-gradient(90deg,#dddddd4d_1px,transparent_1px)
		@dark@bgi=linear-gradient(#fff_2px,transparent_2px),linear-gradient(90deg,#fff_2px,transparent_2px),linear-gradient(#ffffff4d_1px,transparent_1px),linear-gradient(90deg,#ffffff4d_1px,transparent_1px)
		background-size=10em_10em,10em_10em,2em_2em,2em_2em
		background-position=-1em_-1em`
	},
	button: {
		appbarMenu: "p=.5 br=.5 bold ts=0_.1_.5_#fff @dark@ts=0_.1_.5_#000 :hover/ts=0_.1_.5 :active/ts=0_.1_1!",
		contained: "bg=--primary-50 c=#fff p=.5 br=.5 bs=0_.2_0_--primary-22 :hover/bg=--primary-80 :active/bg=--primary-50!",
		resources: "h=2 bg=--primary-50 @dark@bg=--firefly br=.25 pl=.75 pr=.75 bd=2px_solid_--primary :hover/bg=--havelock-blue",
		link: `c=--primary-50 p=.25 br=.5 relative
		:hover/c=--primary-70;bold
		:active/c=--primary-50!
		:hover:before/ct='#';absolute;l=-.5;c=--primary-60`,
		text: "p=.5 br=.5 :hover/bg=#eee :active/bg=#ddd! @dark@:hover/bg=#333 @dark@:active/bg=#444!",
		themeSelector: "bg=--primary-50 :hover/bg=--havelock-blue w=6.25 h=2.5 br=.25 bd=.2_solid"
	},
	checkbox: {
		docsInput: `none
		:checked+label/bg=--primary-50
		:checked+label:after/ct='✔';absolute;tf=translate(0,-.3em)`,
		docsLabel: `inline-block pointer us=none fs=1.5 bold va=-.3em bd=.2_solid_--primary-50 br=.3 w=1.2 h=1.2
		:after/c=--onahau @dark@:after/c=--firefly`
	},
	scrollbar: {
		primary: "::-webkit-scrollbar/w=.5 ::-webkit-scrollbar-track/bg=--primary-70 ::-webkit-scrollbar-thumb/bg=--primary-50;br=.25"
	},
	util: {
		typingText: "_f:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=#fff @dark@_f:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=--cod-gray",
		typingTextInMiddle: "_f:not(:empty):before/inline-block;ct='\\00a0';bg=#fff @dark@_f:not(:empty):before/inline-block;ct='\\00a0';bg=--cod-gray"
	}
}