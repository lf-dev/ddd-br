# ddd-br
arquivos com os DDDs do Brasil

## Formatos

### estado : cidade : numero

```json
...
"RJ": {
    "ANGRA DOS REIS": "24",
    "APERIBE": "22",
    "ARARUAMA": "22",
    "AREAL": "24",
    "ARMACAO DOS BUZIOS": "22"
},
"SP": {
    "ADAMANTINA": "18",
    "ADOLFO": "17",
    "AGUAI": "19",
    "AGUAS DA PRATA": "19"
}
```

### numero : estado : [cidade]


```json
...
21: {
  "estado" : "RJ",
  "cidades": [
    "RIO DE JANEIRO",
    "BELFORD ROXO",
    "CACHOEIRAS DE MACACU",
  ]
},
11: {
  "estado": "SP",
  "cidades": [
    "SAO PAULO",
    "ALUMINIO",
    "ARUJA",
    "ATIBAIA"
  ]
}
```
