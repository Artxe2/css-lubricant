export type DrawerSubList = (
	{ href: string, text: string }
	| {
		summary: string,
		list: { href: string, text: string }[]
	}
)[]