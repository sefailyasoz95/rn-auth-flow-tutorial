export type AppContextType = {
	isAuthenticated?: boolean;
	toggleIsAuthenticated: () => void;
	loading: boolean;
	checkUser: () => void;
};

export type AppStackParams = {
	HomeScreen: undefined;
};

export type AuthStackParams = {
	SignInScreen: undefined;
};
