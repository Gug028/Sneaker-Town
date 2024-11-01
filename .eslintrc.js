module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
	}
	"extends": [
		"eslint:recommended",
		"plgin:prettier/recommended" //
Optional: Integrate Prettier
	],
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"rules": {
		"indent": ["error", 2],
		"linebreak-style": ["error",
	"unix"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"no-unused-vars": ["warn"],
		"no-console": "off",
	}
};
