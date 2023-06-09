var classes = [
    {
        "name": "App\\Dice\\DiceHand",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "roll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNumberDices",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValues",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 4,
        "ccnMethodMax": 2,
        "externals": [
            "App\\Dice\\Dice"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 27,
        "vocabulary": 5,
        "volume": 62.69,
        "difficulty": 6.33,
        "effort": 397.05,
        "level": 0.16,
        "bugs": 0.02,
        "time": 22,
        "intelligentContent": 9.9,
        "number_operators": 8,
        "number_operands": 19,
        "number_operators_unique": 2,
        "number_operands_unique": 3,
        "cloc": 0,
        "loc": 35,
        "lloc": 35,
        "mi": 53.2,
        "mIwoC": 53.2,
        "commentWeight": 0,
        "kanDefect": 0.84,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.8,
        "relativeSystemComplexity": 9.8,
        "totalStructuralComplexity": 45,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 49,
        "package": "App\\Dice\\",
        "pageRank": 0.07,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "numberOfUnitTests": 0,
        "violations": {}
    },
    {
        "name": "App\\Dice\\DiceGraphic",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAsString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 2,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "App\\Dice\\Dice"
        ],
        "parents": [
            "App\\Dice\\Dice"
        ],
        "implements": [],
        "lcom": 2,
        "length": 11,
        "vocabulary": 10,
        "volume": 36.54,
        "difficulty": 1.13,
        "effort": 41.11,
        "level": 0.89,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 32.48,
        "number_operators": 2,
        "number_operands": 9,
        "number_operators_unique": 2,
        "number_operands_unique": 8,
        "cloc": 0,
        "loc": 13,
        "lloc": 13,
        "mi": 64.62,
        "mIwoC": 64.62,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 3,
        "package": "App\\Dice\\",
        "pageRank": 0.07,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "numberOfUnitTests": 0,
        "violations": {}
    },
    {
        "name": "App\\Dice\\Dice",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "roll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValue",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAsString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 15,
        "vocabulary": 8,
        "volume": 45,
        "difficulty": 1.67,
        "effort": 75,
        "level": 0.6,
        "bugs": 0.02,
        "time": 4,
        "intelligentContent": 27,
        "number_operators": 5,
        "number_operands": 10,
        "number_operators_unique": 2,
        "number_operands_unique": 6,
        "cloc": 0,
        "loc": 22,
        "lloc": 22,
        "mi": 59.01,
        "mIwoC": 59.01,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3,
        "relativeSystemComplexity": 3,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 12,
        "totalSystemComplexity": 12,
        "package": "App\\Dice\\",
        "pageRank": 0.41,
        "afferentCoupling": 3,
        "efferentCoupling": 0,
        "instability": 0,
        "numberOfUnitTests": 1,
        "violations": {}
    },
    {
        "name": "App\\Kernel",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Symfony\\Component\\HttpKernel\\Kernel"
        ],
        "parents": [
            "Symfony\\Component\\HttpKernel\\Kernel"
        ],
        "implements": [],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 5,
        "lloc": 5,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "App\\",
        "pageRank": 0.06,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "numberOfUnitTests": 0,
        "violations": {}
    },
    {
        "name": "App\\Repository\\ProductRepository",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "remove",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\Product",
            "App\\Entity\\Product"
        ],
        "parents": [
            "Doctrine\\Bundle\\DoctrineBundle\\Repository\\ServiceEntityRepository"
        ],
        "implements": [],
        "lcom": 2,
        "length": 16,
        "vocabulary": 5,
        "volume": 37.15,
        "difficulty": 1.75,
        "effort": 65.01,
        "level": 0.57,
        "bugs": 0.01,
        "time": 4,
        "intelligentContent": 21.23,
        "number_operators": 2,
        "number_operands": 14,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 32,
        "loc": 53,
        "lloc": 22,
        "mi": 105.99,
        "mIwoC": 59.32,
        "commentWeight": 46.67,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.28,
        "relativeSystemComplexity": 25.28,
        "totalStructuralComplexity": 75,
        "totalDataComplexity": 0.83,
        "totalSystemComplexity": 75.83,
        "package": "App\\Repository\\",
        "pageRank": 0.1,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "numberOfUnitTests": 0,
        "violations": {}
    },
    {
        "name": "App\\Controller\\ProductController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "index",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createProduct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "showAllProduct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "viewAllProduct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "showProductById",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteProductById",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateProduct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 9,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Doctrine\\Persistence\\ManagerRegistry",
            "App\\Entity\\Product",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Response",
            "App\\Repository\\ProductRepository",
            "Symfony\\Component\\HttpFoundation\\Response",
            "App\\Repository\\ProductRepository",
            "Symfony\\Component\\HttpFoundation\\Response",
            "App\\Repository\\ProductRepository",
            "Symfony\\Component\\HttpFoundation\\Response",
            "App\\Repository\\ProductRepository",
            "Symfony\\Component\\HttpFoundation\\Response",
            "App\\Repository\\ProductRepository"
        ],
        "parents": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController"
        ],
        "implements": [],
        "lcom": 4,
        "length": 111,
        "vocabulary": 40,
        "volume": 590.73,
        "difficulty": 6.29,
        "effort": 3713.19,
        "level": 0.16,
        "bugs": 0.2,
        "time": 206,
        "intelligentContent": 93.98,
        "number_operators": 23,
        "number_operands": 88,
        "number_operators_unique": 5,
        "number_operands_unique": 35,
        "cloc": 11,
        "loc": 66,
        "lloc": 55,
        "mi": 71.78,
        "mIwoC": 42.23,
        "commentWeight": 29.56,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 256.5,
        "totalStructuralComplexity": 1792,
        "totalDataComplexity": 3.47,
        "totalSystemComplexity": 1795.47,
        "package": "App\\Controller\\",
        "pageRank": 0.06,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "numberOfUnitTests": 0,
        "violations": {}
    },
    {
        "name": "App\\Controller\\DiceGameController",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "home",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "testRollDice",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "testRollDices",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "testDiceHand",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "init",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initCallback",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "play",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "roll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 9,
        "ccnMethodMax": 4,
        "externals": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Response",
            "App\\Dice\\Dice",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Exception",
            "App\\Dice\\DiceGraphic",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Exception",
            "App\\Dice\\DiceHand",
            "App\\Dice\\DiceGraphic",
            "App\\Dice\\Dice",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Request",
            "Symfony\\Component\\HttpFoundation\\Session\\SessionInterface",
            "App\\Dice\\DiceHand",
            "App\\Dice\\DiceGraphic",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Session\\SessionInterface",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Session\\SessionInterface",
            "Symfony\\Component\\HttpFoundation\\Response",
            "Symfony\\Component\\HttpFoundation\\Session\\SessionInterface"
        ],
        "parents": [
            "Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController"
        ],
        "implements": [],
        "lcom": 2,
        "length": 228,
        "vocabulary": 71,
        "volume": 1402.14,
        "difficulty": 14.59,
        "effort": 20457.49,
        "level": 0.07,
        "bugs": 0.47,
        "time": 1137,
        "intelligentContent": 96.1,
        "number_operators": 50,
        "number_operands": 178,
        "number_operators_unique": 10,
        "number_operands_unique": 61,
        "cloc": 9,
        "loc": 106,
        "lloc": 97,
        "mi": 55.23,
        "mIwoC": 33.42,
        "commentWeight": 21.81,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 0.81,
        "relativeSystemComplexity": 121.81,
        "totalStructuralComplexity": 1089,
        "totalDataComplexity": 7.33,
        "totalSystemComplexity": 1096.33,
        "package": "App\\Controller\\",
        "pageRank": 0.06,
        "afferentCoupling": 0,
        "efferentCoupling": 8,
        "instability": 1,
        "numberOfUnitTests": 0,
        "violations": {}
    },
    {
        "name": "App\\Entity\\Product",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getId",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setName",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValue",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setValue",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 2,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 0,
        "length": 19,
        "vocabulary": 6,
        "volume": 49.11,
        "difficulty": 3,
        "effort": 147.34,
        "level": 0.33,
        "bugs": 0.02,
        "time": 8,
        "intelligentContent": 16.37,
        "number_operators": 7,
        "number_operands": 12,
        "number_operators_unique": 2,
        "number_operands_unique": 4,
        "cloc": 6,
        "loc": 35,
        "lloc": 29,
        "mi": 86.04,
        "mIwoC": 56.12,
        "commentWeight": 29.92,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 5.4,
        "relativeSystemComplexity": 5.4,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 27,
        "totalSystemComplexity": 27,
        "package": "App\\Entity\\",
        "pageRank": 0.19,
        "afferentCoupling": 2,
        "efferentCoupling": 0,
        "instability": 0,
        "numberOfUnitTests": 0,
        "violations": {}
    }
]