//The username can contain letters (both uppercase and lowercase), digits, and some special characters (period, underscore, percent, plus, hyphen).
//It must be followed by the "@" symbol.
//The domain name can contain letters, digits, periods, and hyphens.
//The domain name must be followed by a period (.) and a TLD consisting of 2 to 4 alphabetical characters.
export const emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
 // Password pattern - Minimum eight characters, at least one uppercase letter(A-Z), one lowercase letter(a-z), one special symbol(@$!%*#?&) and one number(0-9)
export const passwordPattern: any = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,32}$';
