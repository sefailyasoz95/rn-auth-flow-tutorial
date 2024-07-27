export type AppContextType = {
	isAuthenticated?: boolean;
	toggleIsAuthenticated: () => void;
	loading: boolean;
	checkUser: () => void;
};
export type Book = {
	price: number;
	id: string;
	title: string;
	subtitle: string;
	authors: string;
	image: string;
	url: string;
};
export type AppStackParams = {
	HomeScreen: undefined;
	DetailScreen: {
		book: Book;
	};
};

export type AuthStackParams = {
	SignInScreen: undefined;
};
