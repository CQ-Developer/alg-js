#!/bin/bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source $HOME/.nvm/nvm.sh
nvm install v22.22.0

rm -f init.sh
