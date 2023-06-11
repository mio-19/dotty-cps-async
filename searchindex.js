Search.setIndex({"docnames": ["AsyncStreams", "AutomaticColoring", "BasicUsage", "FAQ", "Features", "HighOrderFunctions", "Integrations", "Migration", "MonadContexts", "MonadsInteroperability", "References", "ReturningClause", "RuntimeAwait", "index", "random-notes/AsyncSubstCategoricalInterpretation", "random-notes/CpsAsyncOverview", "random-notes/diagrams/README", "random-notes/index"], "filenames": ["AsyncStreams.rst", "AutomaticColoring.rst", "BasicUsage.rst", "FAQ.md", "Features.rst", "HighOrderFunctions.rst", "Integrations.rst", "Migration.rst", "MonadContexts.rst", "MonadsInteroperability.rst", "References.md", "ReturningClause.rst", "RuntimeAwait.rst", "index.rst", "random-notes/AsyncSubstCategoricalInterpretation.rst", "random-notes/CpsAsyncOverview.md", "random-notes/diagrams/README.md", "random-notes/index.rst"], "titles": ["Generators", "Automatic Coloring", "Dependency", "FAQ", "Additional Features", "High-order functions.", "Integrations", "Migration from previous versions.", "Monad Context", "Monads interoperability.", "References", "Non-local returns", "Runtime Await.", "User Manual", "Categorical interpretation for substitutions in async call chains:", "CPS-Async transformations", "&lt;no title&gt;", "Random Notes"], "terms": {"The": [0, 1, 2, 4, 5, 8, 14, 15], "syntax": [0, 2, 6, 8, 13], "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "wai": [0, 5, 8, 15], "deliv": 0, "valu": [0, 5, 12, 13, 15], "some": [0, 1, 5, 6, 8, 12, 15], "form": [0, 3, 5, 12], "asynchron": [0, 1, 5, 10], "exampl": [0, 1, 4, 5, 8, 13, 14, 15], "import": [0, 1, 2, 4, 8, 9], "scala": [0, 1, 2, 3, 4, 5, 6, 8, 9, 11, 13, 15], "concurr": [0, 2, 5, 8, 9, 10, 12, 15], "await": [0, 1, 3, 6, 7, 8, 10, 11, 13, 15], "futur": [0, 1, 2, 4, 5, 8, 11, 13, 15], "executioncontext": [0, 2, 9], "implicit": [0, 1, 2, 5, 8, 10], "global": [0, 2], "durat": [0, 2], "cp": [0, 1, 2, 4, 5, 9, 11, 12, 13, 14, 17], "asyncstream": 0, "monad": [0, 1, 2, 4, 5, 7, 12, 13, 15], "given": [0, 1, 2, 5, 9, 12, 15], "support": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11], "built": [0, 2], "e": [0, 1, 2, 3, 5, 8, 9, 15], "asynclist": 0, "object": [0, 1, 2, 9], "def": [0, 1, 2, 5, 8, 9, 11], "main": [0, 2, 10], "arg": [0, 2], "arrai": [0, 2, 5], "string": [0, 1, 2, 5, 9], "unit": [0, 1, 2, 5, 9], "val": [0, 1, 2, 4, 5, 8, 9, 11, 15], "int": [0, 1, 2, 5, 9], "out": [0, 2, 11], "emit": 0, "0": [0, 1, 2, 4, 5, 6, 10, 11, 13], "1": [0, 1, 2, 6, 7, 9, 14], "10": [0, 9, 10], "do": [0, 1, 2, 5, 8, 10, 15], "f": [0, 1, 2, 5, 8, 10, 12, 14, 15], "takelistal": 0, "re": 0, "result": [0, 1, 2, 5, 15], "second": [0, 2, 5, 15], "println": [0, 2], "": [0, 1, 2, 4, 5, 6, 7, 8, 11, 14, 15], "recommend": [0, 1], "you": [0, 1, 2, 3, 4, 5, 6, 8, 9, 11, 12, 15], "try": [0, 2, 7, 9, 11], "here": [0, 1, 2, 5, 6, 8, 9, 14], "minim": [0, 2], "implement": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 14, 17], "suppli": 0, "dotti": [0, 1, 2, 4, 5, 6, 9, 11, 15], "There": [0, 2], "exist": [0, 1, 3], "integr": [0, 2, 13], "modul": [0, 6, 10, 13], "well": [0, 2, 3], "known": [0, 1, 2], "librari": [0, 2, 3, 5, 6, 10], "see": [0, 1, 2, 5, 8, 12], "section": [0, 2], "input": 0, "code": [0, 1, 2, 4, 5, 8, 12, 15], "block": [0, 1, 2, 3, 4, 5, 8, 9, 11, 12, 15], "which": [0, 1, 2, 3, 5, 7, 8, 9, 11, 12, 15], "should": [0, 1, 4, 5, 7, 8, 9, 11, 12], "lambda": [0, 5, 15], "express": [0, 1, 2, 5, 8, 10, 14, 15], "accept": [0, 3, 5, 9, 15], "an": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 14, 15], "emitt": 0, "argument": [0, 3, 5, 8, 9, 12, 15], "simplifi": [0, 1, 2, 8], "definit": [0, 1, 2, 8, 9], "look": [0, 1, 2, 5, 8, 14, 15], "follow": [0, 1, 2, 5, 9], "inlin": [0, 5, 8, 11], "r": 0, "us": [0, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 15], "cpsasyncabsorb": 0, "cpsasyncemitt": 0, "element": 0, "For": [0, 1, 5, 6, 7, 8, 9, 14, 15], "full": [0, 7], "sourc": [0, 2, 4, 9, 11], "entri": 0, "point": [0, 8], "macro": [0, 1, 2, 5, 8, 10, 11, 12], "cpsasyncemitabsorb": 0, "from": [0, 1, 2, 4, 5, 8, 9, 10, 11, 12, 13, 14], "type": [0, 1, 2, 5, 6, 8, 9, 10, 12], "trait": [0, 1, 2, 5, 8, 9, 12], "oper": [0, 1, 4, 5, 8, 9, 10, 14, 15], "call": [0, 1, 9, 13, 15, 17], "insid": [0, 1, 2, 3, 4, 5, 8, 9, 11, 12, 15], "To": [0, 5, 12, 15, 16], "allow": [0, 1, 5, 8], "your": [0, 1, 3, 4, 5, 6, 7, 8, 9, 11, 12], "need": [0, 1, 2, 4, 5, 7, 8, 12], "where": [0, 1, 2, 3, 5, 7, 8, 12, 14, 15], "eval": 0, "transform": [0, 1, 2, 5, 10, 12, 13, 14, 17], "function": [0, 1, 2, 3, 8, 11, 12, 13, 14, 15], "output": 0, "provid": [0, 1, 3, 4, 6, 7, 8, 9, 12, 13, 15], "platform": 0, "specif": [0, 5, 7], "baseunfoldcpsasyncemitabsorb": 0, "can": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15], "have": [0, 1, 5, 6, 7, 8, 9, 14, 15], "someth": [0, 1, 2, 5], "like": [0, 1, 2, 3, 5, 8, 9, 11], "unfoldasync": 0, "option": 0, "akka": [0, 2], "akkastreamemitabsorb": 0, "t": [0, 1, 2, 5, 8, 9, 11, 14, 15], "notus": 0, "overrid": 0, "unfold": 0, "s0": 0, "map": [0, 2, 3, 5, 9, 14], "_": [0, 1, 2, 5, 8, 9, 14], "case": [0, 2, 4, 5, 8, 11, 12, 14], "x": [0, 1, 2, 3, 4, 5, 6, 9, 15], "y": [0, 3, 15], "sometim": [1, 5], "especi": 1, "when": [1, 4, 5, 7, 8, 11, 12], "we": [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 14, 15], "work": [1, 2, 3, 5, 8, 12, 13, 15], "distribut": [1, 2, 4], "system": [1, 10, 12], "most": [1, 5, 12, 13], "api": [1, 5, 7, 8, 12, 15], "ar": [1, 2, 3, 4, 5, 6, 8, 13, 15], "prefix": 1, "And": [1, 9, 15], "rememb": [1, 15], "what": [1, 3, 5, 8, 15], "async": [1, 3, 4, 8, 10, 11, 12, 13, 17], "It": [1, 4, 8, 15], "problem": 1, "split": [1, 8], "our": [1, 2, 4, 5, 8, 9, 14], "technic": 1, "two": [1, 2, 5, 8, 14, 15], "part": [1, 8, 15], "one": [1, 2, 5, 7, 8, 14], "sync": 1, "without": [1, 4, 5, 6, 12, 15], "If": [1, 3, 5, 6, 11, 12], "want": [1, 2, 3, 5, 6, 8, 11, 12, 15], "put": 1, "synchron": [1, 12], "write": [1, 5, 12, 13, 14, 15], "expr": [1, 2, 8, 10, 15], "instead": [1, 3, 4, 5, 7, 11, 14, 15], "more": [1, 2, 5, 7, 8, 12, 15], "detail": [1, 2, 5], "explan": 1, "In": [1, 2, 4, 5, 8, 15], "3": [1, 2, 4, 6, 8, 11, 13, 15], "so": [1, 4, 5, 11, 15], "why": 1, "ask": 1, "compil": [1, 4, 5, 8, 10, 11], "below": [1, 5], "url": [1, 5], "http": [1, 2, 3, 5, 6, 10], "www": [1, 10], "com": [1, 2, 4, 6, 10], "data": [1, 4, 5, 10, 15], "fetchurl": 1, "theme": 1, "classifytext": 1, "dmpinfo": 1, "retrievedmpinfo": 1, "written": [1, 10], "automaticcolor": 1, "c": [1, 2, 5, 8, 9, 10, 14, 15], "underli": 1, "execut": [1, 5, 9, 15], "cach": [1, 5], "thi": [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14, 15], "featur": [1, 5, 12, 13], "same": [1, 2, 5, 14, 15], "caus": [1, 7], "reevalu": 1, "enough": 1, "But": [1, 5, 9], "handl": [1, 2, 5, 7, 11], "pure": [1, 2, 10], "hold": [1, 5], "comput": [1, 12, 13, 15], "start": [1, 3, 5, 12], "them": [1, 5], "let": [1, 5, 8, 14, 15], "updatecount": 1, "counter": 1, "io": [1, 2, 9, 10, 15], "increment": 1, "log_mod": 1, "log": 1, "log_treshold": 1, "convers": [1, 9], "applii": 1, "treshold": 1, "assum": [1, 5], "evalu": [1, 5, 8, 9, 15], "each": [1, 5, 8], "time": [1, 5, 11], "get": [1, 2], "action": [1, 7], "insert": [1, 5, 9], "test": [1, 4], "print": 1, "make": [1, 5, 8, 9], "dure": [1, 4, 5, 9], "creation": 1, "otherwis": [1, 5], "three": 1, "signatur": [1, 5, 8], "differ": [1, 4, 5, 9], "imper": [1, 9, 10], "intern": [1, 8], "extern": [1, 6, 8], "receiv": [1, 2, 5, 9, 14, 15], "flatten": [1, 9], "expressin": 1, "return": [1, 5, 7, 8, 9, 13, 15], "origin": [1, 4, 5, 8], "cpsmonadmemo": 1, "default": [1, 4, 5], "inplac": 1, "dynam": 1, "resolv": 1, "side": [1, 9, 10], "variabl": 1, "enforc": 1, "help": [1, 2, 3, 4, 12, 15], "addit": [1, 5, 8, 13], "preliminari": [1, 3], "analysi": 1, "onli": [1, 4, 5, 6, 7, 8, 9, 12], "context": [1, 7, 13], "via": [1, 3, 10], "pass": [1, 4, 5, 15], "other": [1, 2, 5, 9, 13, 15], "uncach": 1, "both": [1, 5], "deduc": 1, "programm": [1, 5], "intent": 1, "report": [1, 10], "error": [1, 7, 15], "next": [1, 5, 14, 15], "algorithm": [1, 5], "invoc": 1, "count": 1, "number": [1, 2, 15], "ia": 1, "vice": 1, "versa": 1, "defin": [1, 2, 4, 5, 8, 9, 14], "outsid": [1, 8], "than": [1, 8, 15], "onc": [1, 5], "also": [1, 2, 4, 5, 6, 8, 9, 11, 12], "typic": 1, "develop": [1, 3, 4, 5, 10], "mistak": 1, "forget": 1, "connect": [1, 2, 13, 15], "process": [1, 5, 12], "customvaluediscard": 1, "limit": [1, 3], "non": [1, 12, 13], "final": [1, 2], "enabl": [1, 2, 5, 10, 12], "those": [1, 5, 12, 15], "special": [1, 14], "valuediscard": 1, "found": 1, "current": [1, 2, 3, 8], "scope": 1, "drop": [1, 10], "prohibit": 1, "appli": [1, 8, 9, 14, 15], "method": [1, 7, 8], "op": [1, 9], "primit": 1, "extend": [1, 5, 9, 10, 15], "its": [1, 15], "own": [1, 8, 15], "fetch": [1, 5], "dryrun": 1, "processdata": 1, "semant": [1, 14], "rais": 1, "imposs": [1, 9, 14], "run": [1, 2, 5], "9": [1, 2, 4, 13], "forgot": 1, "wrap": [1, 7, 15], "warn": 1, "warnvaluediscard": 1, "note": [1, 2, 4, 5, 6, 8, 9, 10, 11, 12, 13], "prevent": 1, "situat": 1, "branch": 1, "flow": [1, 8], "again": 1, "ha": [1, 5, 8, 9], "messag": 1, "statement": [1, 10], "first": [1, 5, 9, 10, 15], "awaitvaluediscard": 1, "forc": 1, "befor": [1, 3], "being": 1, "footnot": [1, 2], "realiti": [1, 2], "thei": [1, 2], "complex": [1, 2, 8], "becaus": [1, 2, 9, 12], "infer": [1, 2, 10], "independ": [1, 2], "prereleas": 2, "17": [2, 10, 13], "librarydepend": [2, 4, 6], "github": [2, 3, 4, 6, 10], "rssh": [2, 4, 13], "javascript": [2, 9, 10], "nativ": 2, "target": 2, "automat": [2, 4, 5, 10, 13], "determin": 2, "whether": [2, 5], "jvm": [2, 6, 10, 12, 13], "j": [2, 6, 13], "project": [2, 5, 6, 10], "cross": 2, "build": [2, 5, 6, 8, 15], "similar": [2, 15], "framework": 2, "2": [2, 3, 4, 6, 7, 13], "g": [2, 8, 9, 15], "languag": [2, 13], "pseudo": [2, 15], "am": [2, 8], "cpsmonad": [2, 5, 6, 7, 8], "myfun": 2, "param": 2, "mymonad": 2, "possibl": [2, 4, 8, 9, 12], "abov": 2, "must": 2, "class": [2, 5, 6, 8], "cpstrymonad": [2, 7, 8, 9], "catch": [2, 7, 11], "complet": [2, 8], "snippet": [2, 5], "packag": 2, "mymodul": 2, "util": [2, 12], "failur": 2, "success": [2, 9], "fetchgreet": 2, "dummi": 2, "hi": [2, 8], "greet": 2, "readi": 2, "fail": 2, "ex": [2, 11], "getmessag": 2, "ad": [2, 8], "file": [2, 9, 10], "mvnrepositori": 2, "artifact": 2, "list": [2, 5], "further": 2, "cat": [2, 13], "effect": [2, 8, 10, 12, 13], "monix": 2, "scalaz": 2, "zio": [2, 10], "stream": [2, 5, 10, 13], "fs2": 2, "A": [2, 5, 9, 11, 14, 15], "abstract": 2, "handler": [2, 10], "openconnect": [2, 15], "while": 2, "command": [2, 15], "readcommand": [2, 15], "logcommand": 2, "repli": 2, "ismut": 2, "send": [2, 6, 15], "tobyt": 2, "isshutdown": 2, "close": [2, 8], "m": [2, 3, 5, 15], "flatmap": [2, 5, 7, 14, 15], "withact": 2, "_whilefun": 2, "els": 2, "sinc": 2, "optim": [2, 17], "techniqu": [2, 14], "bracket": 2, "read": [2, 5, 9, 15], "about": [2, 5, 6, 8, 9, 10], "appropri": [2, 5, 8], "direct": [2, 7, 10, 14, 15], "style": [2, 7, 10, 15], "applic": [2, 3, 8], "probabilist": 2, "program": [2, 4, 13, 15], "navig": 2, "over": [2, 5, 15], "search": [2, 13], "space": [2, 14], "collect": [2, 5], "mani": 2, "reifi": [2, 8], "reflect": [2, 8, 10], "gener": [2, 4, 5, 8, 10, 13], "bayesiancoin": 2, "nflip": 2, "trial": 2, "havefaircoin": 2, "tf": 2, "mycoin": 2, "coin": 2, "biasedcoin": 2, "flip": 2, "repeat": 2, "allpair": 2, "l": 2, "yet": [2, 5], "pair": 2, "lift": 2, "unlift": 2, "monadless": [2, 10], "flavio": 2, "w": [2, 10], "brasil": 2, "testmonadlesssyntax": 2, "futureasyncmonad": [2, 6, 9], "responsestr": 2, "responsetostr": 2, "badrequest": 2, "except": [2, 11], "all": [3, 4, 5, 7, 9, 12, 15], "construct": [3, 5, 8, 12, 14], "high": [3, 12, 13], "order": [3, 12, 13, 14], "filter": [3, 14], "ye": 3, "author": 3, "shift": [3, 12, 13], "wa": [3, 4, 15], "previous": 3, "gopher": [3, 10], "paper": [3, 10], "arxiv": [3, 10], "org": [3, 6, 10], "ab": [3, 10], "1611": [3, 10], "00602": [3, 10], "practic": [3, 8], "even": [3, 15], "quit": [3, 4, 8], "open": [3, 10], "issu": 3, "select": 3, "unassign": 3, "plan": 3, "consult": 3, "choos": 3, "task": [3, 5, 15], "ping": 3, "me": 3, "directli": [3, 5], "mail": 3, "twitter": 3, "version": [3, 4, 5, 11, 13], "No": 3, "environ": 4, "doe": [4, 11], "color": [4, 10, 13], "too": 4, "heavi": 4, "unary_": 4, "usernam": 4, "fetchtoken": 4, "synonym": 4, "layer": 4, "migrat": [4, 13], "legaci": 4, "chang": [4, 5, 11], "sip22": 4, "base": [4, 8, 9, 12, 13], "includ": [4, 5, 12], "regress": 4, "suit": 4, "shim": 4, "7": [4, 6], "primari": 4, "goal": 4, "bug": 4, "port": [4, 10], "xasync": 4, "plugin": 4, "contain": 5, "client": 5, "remot": 5, "server": 5, "httpclient": 5, "fetchdata": 5, "Then": 5, "just": [5, 11], "sequenti": [5, 15], "correctli": 5, "updat": 5, "multidimension": 5, "loop": 5, "request": [5, 6], "parallel": [5, 10], "wait": [5, 8], "end": [5, 9], "strategi": 5, "depend": [5, 6, 13], "capabl": 5, "b": [5, 14], "summon": [5, 9], "asyncshift": [5, 14], "obj": 5, "standard": 5, "getorels": 5, "jdk": [5, 12], "19": [5, 12], "set": 5, "virtual": [5, 12], "thread": [5, 12], "o": [5, 10], "view": 5, "real": 5, "don": [5, 8, 15], "cpsruntimeawait": [5, 12], "typeclass": [5, 12], "experiment": [5, 6], "declar": [5, 12], "flag": [5, 12], "usingloomawait": 5, "suppos": 5, "abl": [5, 9], "purpos": 5, "Such": 5, "paramet": [5, 8, 15], "instanc": [5, 7, 8, 14], "name": [5, 11, 13, 15], "taggedvalu": 5, "tag": 5, "becom": [5, 8], "prepend": 5, "taggedvalueasyncshift": 5, "transpar": [5, 8, 11], "shiftedtaggedvalu": 5, "manner": 5, "privat": 5, "break": [5, 11], "encapsul": 5, "myintcontrol": 5, "var": 5, "modifi": 5, "old": 5, "sendsign": 5, "modify_async": 5, "As": [5, 8], "seen": 5, "alreadi": 5, "enclos": [5, 8], "omit": 5, "variant": [5, 8, 12, 14], "carefulli": 5, "decid": 5, "deal": [5, 10], "modif": 5, "interleav": 5, "usual": [5, 14, 15], "low": [5, 15], "level": [5, 15], "counterpart": 5, "consid": [5, 8], "One": 5, "withfilt": [5, 14], "statu": 5, "activ": 5, "item": [5, 11], "retrieveitem": 5, "yield": 5, "iter": [5, 14], "translat": [5, 10, 11], "accord": 5, "rule": [5, 8, 13], "perform": [5, 12, 14], "delayedwithfilt": 5, "predic": [5, 14], "delai": [5, 9, 14], "actual": 5, "upon": 5, "ca": 5, "p": 5, "boolean": 5, "callchainasyncshiftsubst": 5, "eager": 5, "copi": 5, "_finishchain": [5, 14], "q": 5, "cx": 5, "withfilter_async": [5, 14], "map_async": 5, "iterableonc": 5, "flatmap_async": 5, "foreach": 5, "u": [5, 8, 10, 14], "foreach_async": 5, "batch": [5, 14], "By": 5, "convent": 5, "deriv": [5, 7], "ft": [5, 9], "structur": [5, 8, 9, 10, 15], "nice": 5, "categor": [5, 13, 17], "interpret": [5, 12, 13, 15, 17], "curiou": 5, "common": 5, "usag": [5, 8, 12, 13], "pattern": [5, 10], "readchannel": 5, "mapasync": 5, "channel": 5, "top": [5, 10], "necessari": 5, "conveni": 5, "camelcas": 5, "snake_cas": 5, "propos": [5, 10], "method_async": 5, "unlik": 5, "methodasync": 5, "expect": 5, "along": [5, 14, 15], "itself": 6, "avail": [6, 8, 9], "java": [6, 10], "completablefutur": 6, "promis": [6, 8, 13], "jsfutur": [6, 9], "third": 6, "parti": 6, "stack": 6, "add": 6, "sbt": [6, 13], "catseffectvers": 6, "cpsasyncconnectvers": 6, "maven": 6, "4": 6, "core": 6, "m12": 6, "seri": 6, "dev": [6, 10], "zio1vers": 6, "zio2vers": 6, "zio2": 6, "lightbend": 6, "typesaf": 6, "akkavers": 6, "co": [6, 10], "fs2version": 6, "uniform": 6, "ecosystem": 6, "mention": 6, "pleas": 6, "pull": [6, 9], "custom": [7, 13], "cpsmonadinstancecontext": [7, 8], "deprec": [7, 11], "cpstrymonadinstancecontext": 7, "cpsthrowmonadinstancecontext": 7, "throw": 7, "cospuremonadinstancecontext": 7, "flat": 7, "now": 7, "alia": 7, "compiletim": 7, "adoptawait": 7, "simplic": 7, "unifi": 7, "encod": [7, 8], "introduct": 8, "chapter": [8, 10], "shown": [8, 14], "represent": [8, 15], "inferasyncarg": 8, "aux": 8, "take": 8, "extract": 8, "cpsawait": 8, "cpsmonadcontext": 8, "wrapper": 8, "bit": 8, "tradit": [8, 13, 15], "haskel": [8, 9, 13], "repres": [8, 12, 15], "industri": 8, "jokingli": 8, "sai": 8, "leibnic": 8, "monadologi": 8, "uniqu": 8, "qualiti": 8, "access": 8, "adopt": 8, "anoth": [8, 15], "cpstrymonadcontext": 8, "intercept": 8, "timeout": 8, "plain": [8, 11], "think": 8, "how": [8, 9, 13, 15], "futurewithtimeout": 8, "within": 8, "fire": 8, "timeoutexcept": 8, "less": 8, "clear": 8, "combin": 8, "small": 8, "renam": 8, "deadlin": 8, "control": 8, "answer": 8, "fill": 8, "finish": 8, "underlai": 8, "elaps": 8, "testfuturewithdeadlin": 8, "approach": [8, 15], "organ": 8, "altern": [8, 13], "signal": 8, "know": 8, "exclus": 8, "lazi": [8, 10], "design": 8, "choic": 8, "solut": 8, "larg": 8, "writer": 8, "visibl": [8, 9], "trivial": 8, "mix": 8, "advanc": 8, "advis": 8, "cpscontextmonad": 8, "notic": [8, 14], "compat": [8, 13], "flinski": 8, "accordingli": 8, "cpsmonadconvers": 9, "describ": [9, 14, 15], "invok": 9, "ani": [9, 14], "fromfutureconvers": 9, "cpsasyncmonad": 9, "adoptcallbackstyl": 9, "listen": 9, "oncomplet": 9, "mean": 9, "callback": 9, "immedi": 9, "after": [9, 15], "fun": 9, "computationbound": 9, "schedul": 9, "cpsschedulingmonad": 9, "somewher": 9, "characterist": 9, "mai": [9, 10], "vari": 9, "spawn": 9, "submit": 9, "unsafeperformio": 9, "world": 9, "Of": 9, "cours": 9, "creat": 9, "between": [9, 14], "principl": 9, "Not": 9, "subject": 9, "attach": 9, "unimplement": 9, "still": [9, 12], "fluent": 9, "facad": 9, "jsexporttoplevel": 9, "fromscalaexampl": 9, "jsexport": 9, "myfunct": 9, "embed": 10, "tfp2022": 10, "slide": 10, "slideshar": 10, "net": 10, "rssh1": 10, "2022": 10, "articl": 10, "link": 10, "springer": 10, "1007": 10, "978": 10, "031": 10, "21314": 10, "4_1": 10, "preprint": 10, "2209": 10, "10941": 10, "free": 10, "scalar": 10, "youtub": 10, "watch": 10, "v": 10, "imluutqueaq": 10, "june": 10, "2020": 10, "scalaua": 10, "norplxyoa": 10, "april": 10, "liber": 10, "continu": [10, 15], "infosci": 10, "epfl": 10, "ch": 10, "record": 10, "149136": 10, "icfp113": 10, "rompf": 10, "pdf": 10, "storm": 10, "enrout": 10, "coroutin": 10, "dagstuhl": 10, "de": 10, "opu": 10, "volltext": 10, "2018": 10, "9208": 10, "lipic": 10, "ecoop": 10, "thoughtwork": 10, "dsl": 10, "thoughtworksinc": 10, "pelotom": 10, "tech": 10, "lampepfl": 10, "requir": 10, "loom": [10, 13], "recent": 10, "subset": 10, "histor": 10, "overview": [10, 13, 17], "softwareengin": 10, "stackexchang": 10, "question": [10, 15], "377464": 10, "who": 10, "did": 10, "ansi": 10, "n4134": 10, "defer": 10, "std": 10, "jtc1": 10, "sc22": 10, "wg21": 10, "doc": 10, "2014": 10, "n4680": 10, "20": 10, "stackless": 10, "2017": 10, "blog": 10, "lewissbak": 10, "11": 10, "understand": 10, "imlplement": 10, "cppcoro": 10, "microsoft": 10, "en": 10, "dotnet": 10, "csharp": 10, "guid": 10, "concept": 10, "midori": 10, "joeduffyblog": 10, "2015": 10, "03": 10, "dart": 10, "tour": 10, "asynchroni": 10, "formal": [10, 15], "spec": 10, "dartlangspecdraft": 10, "intro": 10, "page": [10, 13], "18": 10, "spice": 10, "up": 10, "extens": [10, 14], "dl": 10, "acm": 10, "doi": 10, "1145": 10, "2742694": 10, "2747873": 10, "firefli": 10, "post": 10, "analog": 10, "ahnfelt": 10, "fsharp": 10, "tomasp": 10, "academ": 10, "zoo": 10, "joinad": 10, "go": 10, "On": 10, "ron": 10, "pressler": 10, "novemb": 10, "2021": 10, "mozilla": 10, "web": 10, "async_funct": 10, "funfix": 10, "koka": 10, "algebra": 10, "research": 10, "wp": 10, "content": 10, "upload": 10, "05": 10, "asynceffect": 10, "msr": 10, "tr": 10, "21": 10, "kotlin": 10, "nim": 10, "lang": 10, "asyncdispatch": 10, "html": 10, "ocaml": 10, "kcsrk": 10, "info": 10, "system_effects_feb_18": 10, "tutori": 10, "ocamllab": 10, "cufp": 10, "retrofit": 10, "onto": 10, "2104": 10, "00250": 10, "python": 10, "pep": 10, "0492": 10, "trio": 10, "friendli": 10, "rust": 10, "group": 10, "team": 10, "book": 10, "nightli": 10, "tokio": 10, "runtim": [10, 11, 13], "swift": 10, "appl": 10, "evolut": 10, "blob": 10, "0296": 10, "md": 10, "zig": 10, "descript": 10, "ziglang": 10, "download": 10, "5": 10, "releas": 10, "colorblind": 10, "kristoff": 10, "match": 10, "docas": 10, "unchain": 10, "embrac": 10, "local": [10, 13, 15], "lean": 10, "leanprov": 10, "claus": 11, "sourceweight": 11, "dataapi": 11, "fetchsourc": 11, "weight": 11, "foldleft": 11, "si": 11, "sourceinfo": 11, "isblacklist": 11, "throwreturn": 11, "intersect": 11, "nonfat": 11, "throwabl": 11, "valid": 11, "localcheck": 11, "fals": 11, "remotecheck": 11, "avoid": [11, 15], "overhead": 11, "hide": 11, "sure": 11, "earlyreturn": 11, "returnthrow": 11, "noth": 11, "better": [11, 15], "boundari": 11, "introduc": [11, 15], "box": 11, "lightweight": 12, "escap": [12, 16], "loomruntimeawait": 12, "entir": 12, "mark": 12, "cpsfastruntimeawait": 12, "useloom": 12, "benefici": 12, "reason": 12, "thunk": 12, "new": 12, "therefor": 12, "hybrid": 12, "mode": 12, "basic": 13, "interfac": 13, "substitut": [13, 17], "interoper": 13, "memoiz": 13, "safeti": 13, "discard": 13, "adapt": 13, "typelevel": 13, "short": 13, "sip": 13, "22": 13, "previou": 13, "16": 13, "random": 13, "chain": [13, 17], "faq": 13, "refer": 13, "present": [13, 15], "relat": [13, 14, 15], "unrel": 13, "po": 13, "index": 13, "folow": 14, "diagram": [14, 16], "hight": 14, "give": 14, "f_": 14, "naiv": 14, "withfiter_async": 14, "asyncsubst": 14, "callchainasyncsubst": 14, "save": 14, "pictur": 14, "h": 14, "imag": 14, "h_f": 14, "h_": 14, "commut": 14, "move": 14, "functor": 14, "left": [14, 15], "kan": 14, "asynsubst": 14, "andthen": 14, "compos": [14, 15], "stand": 15, "ai": 15, "mem": 15, "349": 15, "scheme": 15, "calculu": 15, "alwai": 15, "ie": 15, "sequenc": 15, "rest": 15, "contunu": 15, "engin": 15, "evaluatecommand": 15, "ident": 15, "exactli": 15, "etc": 15, "poor": 15, "man": 15, "background": 15, "often": 15, "manual": 15, "prone": 15, "occurr": 15, "eras": 15, "composit": 15, "leav": 15, "align": 15, "keep": 15, "equal": 15, "realli": 15, "achiev": 15, "maintain": 15, "cpsexpr": 15, "cpstree": 15, "anf": 15, "preprocess": 15, "micro": 15, "human": 15, "hand": 15, "chunk": 15, "deconstruct": 15, "quot": 15, "tasti": 15, "tree": 15, "produc": 16, "pdflatex": 16, "shell": 16, "tex": 16}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"gener": 0, "async": [0, 2, 5, 6, 9, 14, 15], "stream": [0, 6], "write": 0, "adapt": 0, "custom": [0, 1], "automat": 1, "color": 1, "overview": [1, 15], "memoiz": 1, "safeti": 1, "rule": 1, "us": 1, "effect": [1, 6], "valu": 1, "discard": 1, "depend": 2, "sbt": 2, "exampl": [2, 9, 10], "basic": 2, "usag": 2, "tradit": 2, "await": [2, 4, 5, 9, 12], "interfac": [2, 4, 5], "altern": 2, "name": 2, "faq": 3, "addit": [4, 6], "featur": 4, "short": 4, "syntax": [4, 10], "sip": 4, "22": 4, "compat": 4, "high": 5, "order": 5, "function": [5, 10], "shift": 5, "substitut": [5, 14], "loom": 5, "base": 5, "runtim": [5, 12], "how": 5, "provid": 5, "object": 5, "orient": 5, "special": 5, "semant": 5, "call": [5, 6, 14], "chain": [5, 14], "builder": 5, "method": 5, "integr": 6, "rssh": 6, "cp": [6, 15], "connect": 6, "cat": 6, "monix": 6, "scalaz": 6, "io": 6, "zio": 6, "akka": 6, "fs2": 6, "probabl": 6, "monad": [6, 8, 9, 10], "typelevel": 6, "migrat": 7, "from": 7, "previou": 7, "version": 7, "0": 7, "9": 7, "17": 7, "16": 7, "context": 8, "interoper": 9, "futur": 9, "f": 9, "j": 9, "promis": 9, "refer": 10, "present": 10, "relat": 10, "work": 10, "scala": 10, "2": 10, "3": 10, "other": 10, "languag": 10, "comput": 10, "program": 10, "unrel": 10, "po": 10, "most": 10, "ar": 10, "haskel": 10, "non": 11, "local": 11, "return": 11, "user": 13, "manual": 13, "content": 13, "api": 13, "doc": 13, "indic": 13, "tabl": 13, "categor": 14, "interpret": 14, "transform": 15, "optim": 15, "implement": 15, "note": [15, 17], "random": 17}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Generators": [[0, "generators"]], "Async Streaming": [[0, "async-streaming"]], "Writing generator adapters for custom streams": [[0, "writing-generator-adapters-for-custom-streams"]], "Automatic Coloring": [[1, "automatic-coloring"]], "Overview": [[1, "overview"]], "Automatic Coloring & Memoization": [[1, "automatic-coloring-memoization"]], "Safety rules for using memoized effect.": [[1, "safety-rules-for-using-memoized-effect"]], "Custom value discard": [[1, "custom-value-discard"]], "Dependency": [[2, "dependency"]], "Sbt Example": [[2, "sbt-example"]], "Basic Usage": [[2, "basic-usage"]], "Traditional async/await interface": [[2, "traditional-async-await-interface"]], "Alternative names": [[2, "alternative-names"]], "FAQ": [[3, "faq"]], "Additional Features": [[4, "additional-features"]], "Short syntax for await": [[4, "short-syntax-for-await"]], "SIP-22 compatible interface": [[4, "sip-22-compatible-interface"]], "High-order functions.": [[5, "high-order-functions"]], "Async shift substitution.": [[5, "async-shift-substitution"]], "Loom-based runtime await.": [[5, "loom-based-runtime-await"]], "How to provide shifted functions.": [[5, "how-to-provide-shifted-functions"]], "Functional interface.": [[5, "functional-interface"]], "Object-oriented interface.": [[5, "object-oriented-interface"]], "Special semantics for substitutions in call chains": [[5, "special-semantics-for-substitutions-in-call-chains"]], "Builder methods.": [[5, "builder-methods"]], "Async high-order functional interfaces": [[5, "async-high-order-functional-interfaces"]], "Integrations": [[6, "integrations"]], "rssh/cps-async-connect": [[6, "rssh-cps-async-connect"]], "Cats Effect": [[6, "cats-effect"]], "Monix": [[6, "monix"]], "Scalaz IO": [[6, "scalaz-io"]], "ZIO and ZIO Streams": [[6, "zio-and-zio-streams"]], "Akka Stream": [[6, "akka-stream"]], "FS2 Stream": [[6, "fs2-stream"]], "Probability Monad": [[6, "probability-monad"]], "typelevel/cats-effect-cps": [[6, "typelevel-cats-effect-cps"]], "Call for additions:": [[6, "call-for-additions"]], "Migration from previous versions.": [[7, "migration-from-previous-versions"]], "0.9.17": [[7, "id1"]], "0.9.16": [[7, "id2"]], "Monad Context": [[8, "monad-context"]], "Monads interoperability.": [[9, "monads-interoperability"]], "Future Examples": [[9, "future-examples"]], "async[F] { await[Future]( /*..*/ ) }": [[9, "async-f-await-future"]], "async[Future] { await[F]( /*..*/ ) }": [[9, "async-future-await-f"]], "js.Promise": [[9, "js-promise"]], "References": [[10, "references"]], "Presentations": [[10, "presentations"]], "Related work in Scala 2": [[10, "related-work-in-scala-2"]], "Related work in Scala 3": [[10, "related-work-in-scala-3"]], "Related work in other languages": [[10, "related-work-in-other-languages"]], "Monadic Computations in Functional Programming (unrelated to PO Syntax, most examples are Haskell).": [[10, "monadic-computations-in-functional-programming-unrelated-to-po-syntax-most-examples-are-haskell"]], "Non-local returns": [[11, "non-local-returns"]], "Runtime Await.": [[12, "runtime-await"]], "User Manual": [[13, "user-manual"]], "Contents:": [[13, null]], "API docs": [[13, "api-docs"]], "Indices and tables": [[13, "indices-and-tables"]], "Categorical interpretation for substitutions in async call chains:": [[14, "categorical-interpretation-for-substitutions-in-async-call-chains"]], "CPS-Async transformations": [[15, "cps-async-transformations"]], "CPS Overview": [[15, "cps-overview"]], "Optimizations": [[15, "optimizations"]], "Implementation notes": [[15, "implementation-notes"]], "Random Notes": [[17, "random-notes"]]}, "indexentries": {"customvaluediscard": [[1, "index-0"]], "warnvaluediscard": [[1, "index-1"]], "cpsmonad": [[2, "index-2"]], "cpstrymonad": [[2, "index-3"]], "async": [[2, "index-0"]], "await": [[2, "index-1"]], "sip22": [[4, "index-0"]], "asyncshift": [[5, "index-0"]]}})