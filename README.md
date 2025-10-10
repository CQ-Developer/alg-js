# alg-js

## vscode config

```json
{
    "jest.runMode": "on-demand"
}
```

## devcontainer config

```json
{
    "name": "alg-js",
    "image": "mcr.microsoft.com/devcontainers/javascript-node:22",
    "features": {
        "ghcr.io/devcontainers/features/common-utils:2": {
            "upgradlePackages": true,
            "installZsh": false,
            "installOhMyZsh": false,
            "installOhMyZshConfig": false
        }
    },
    "customizations": {
        "vscode": {
            "extensions": [
                "Orta.vscode-jest"
            ]
        }
    }
}
```