#!/bin/sh
#
# A bash script for auto-installing Automattic's starter WordPress
# theme, _s.
#
# Usage:
#     install.sh 'theme_name'
# or:
#     wget https://raw.github.com/Automattic/_s/master/install.sh
#     chmod 755 ./install.sh
#    ./install.sh 'theme_name'
#
# If no `theme_name` is provided, then the script will prompt the
# user for the name of the theme.
#
# @package _s
#
# Rules for renaming (corresponds to variable names):
#   1) Search for: '_s' and replace with: 'megatherium'
#   2) Search for: _s_ and replace with: megatherium_
#   3) Search for:  _s and replace with:  Megatherium    (<- space before theme name)
#   4) Search for: _s- and replace with: megatherium-
#   5) Search for: Text Domain: _s and replace with: Text Domain: megatherium in style.css.
#

set -e # Exit on error
#set -x # Debugging

if [[ $# -lt 1 ]]; then
    echo "What is the theme name?"
    echo "Type the theme name (no spaces or slashes), the press [ENTER]: "
    read themeName
else
    export themeName=$1
fi

# Clean up user input, make lowercase
# @TODO Make this strip whitespace, like `chomp()` in Perl
themeName=$(echo $themeName | tr '[:upper:]' '[:lower:]')

# Renaming Rules
_2="_"
_3=" "
_4="-"
_5="Text Domain: "

# Define renaming variables
export themeName_1="${themeName}"
export themeName_2="${themeName}${_2}"
export themeName_3="${_3}$( echo "${themeName}" | awk '{for(i=1;i<=NF;i++)sub(/./,toupper(substr($i,1,1)),$i)}1')"
export themeName_4="${themeName}${_4}"
export themeName_5="${_5}${themeName}"

# Define old _s variables
export _s="_s"
export _s_1=${_s}
export _s_2=${_s}${_2}
export _s_3=${_3}${_s}
export _s_4=${_s}${_4}
export _s_5=${_5}${_s}i

# Download the theme
CWD=pwd
regex='wp-content\/themes$'
if [[ ${CWD}=~${regex} ]]; then
    git clone https://github.com/Automattic/_s ${themeName}
else
    echo "Please run this from the wp-content/themes/ directory."
fi

cd ${themeName}

echo ""
echo "The theme has been downloaded!"
echo "Now we are customizing the files with your theme name."
echo "Please stand by..."

# Initiate search and replace
#
# If you don't do them in reverse order, then `${_s}` replaces everything
# and the other searches do nothing.
find . -type f -print0 | xargs -0 perl -i.bak -pe 's/\b$ENV{'_s_5'}/$ENV{'themeName_5'}/g'
find . -type f -print0 | xargs -0 perl -i.bak -pe 's/\b$ENV{'_s_4'}/$ENV{'themeName_4'}/g'
find . -type f -print0 | xargs -0 perl -i.bak -pe 's/\b$ENV{'_s_3'}/$ENV{'themeName_3'}/g'
find . -type f -print0 | xargs -0 perl -i.bak -pe 's/\b$ENV{'_s_2'}/$ENV{'themeName_2'}/g'
find . -type f -print0 | xargs -0 perl -i.bak -pe 's/\b$ENV{'_s_1'}/$ENV{'themeName_1'}/g'

# Remove temporary backup files
find . -name '*.bak' -print0 | xargs -0 rm -rf

# Make a new README file
rm -f README.md
echo "# ${themeName} #" > README.md
echo "" >> README.md
echo "This is an auto-generated README file. Edit it to share some details about your theme!" >> README.md

echo ""
echo "All done! Enjoy hacking away at WordPress and the _s starter theme!"
