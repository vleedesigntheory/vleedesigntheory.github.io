(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{253:function(n,e,t){"use strict";t.r(e);var s=t(0),a=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"vee-cli脚手架实践-上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vee-cli脚手架实践-上"}},[n._v("#")]),n._v(" vee-cli脚手架实践(上)")]),n._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),t("p",[n._v("随着前端的发展，工程化已经成为每一个前端都应该重视和熟悉的方面，而作为工程化之一的脚手架更是在日常开发中起到了十分重要的作用，而能够根据业务和项目需要为自己的前端团队打造个性化的属于自己团队的脚手架也会成为工程师项目简历中的一道亮点，本文主要是借鉴vue-cli脚手架的源码，练习自己搭建脚手架过程中遇到的问题及自己的思考。(ps: 一款成熟的脚手架通常要包括以下功能：1、命令行；2、模板拉取；3、本地服务；4、打包构建；5、集成部署；6、周边其他，本文主要是对脚手架大致的功能进行一定的探究，手写一版粗浅的脚手架，后续如果有项目实践，会持续更新分享。)")]),n._v(" "),t("h2",{attrs:{id:"命令行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[n._v("#")]),n._v(" 命令行")]),n._v(" "),t("h3",{attrs:{id:"大框架结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大框架结构"}},[n._v("#")]),n._v(" 大框架结构")]),n._v(" "),t("p",[t("img",{attrs:{src:"/tech/front/cli20200701/cli01.jpeg",alt:"图片"}})]),n._v(" "),t("p",[n._v("[目录结构]")]),n._v(" "),t("ul",[t("li",[n._v("bin\n"),t("ul",[t("li",[n._v("www (全局命令执行入口连接，用npm link进行连接)")])])]),n._v(" "),t("li",[n._v("src\n"),t("ul",[t("li",[n._v("main.js (入口文件，对命令进行分发)")]),n._v(" "),t("li",[n._v("create.js (创建的命令，所有创建的逻辑在此文件中书写)")]),n._v(" "),t("li",[n._v("config.js (配置的命令，所有的配置的命令在此文件中书写)")]),n._v(" "),t("li",[n._v("constants.js (常量文件，所有常量配置在此文件中)")])])]),n._v(" "),t("li",[n._v("package.json")])]),n._v(" "),t("p",[n._v("[目录描述] bin下的www脚本获取全局的执行环境，可引入入口文件，我们在此将其导入到main.js中，所有的命令都可在main.js进行分发，为了更好的使用，可以将不同命令分到不同的js文件下，这里用到了commander的包对命令进行分发，具体业务可在对应文件中进行后续扩展")]),n._v(" "),t("h3",{attrs:{id:"命令配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令配置"}},[n._v("#")]),n._v(" 命令配置")]),n._v(" "),t("h4",{attrs:{id:"入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入口"}},[n._v("#")]),n._v(" 入口")]),n._v(" "),t("p",[t("img",{attrs:{src:"/tech/front/cli20200701/cli02.jpeg",alt:"图片"}})]),n._v(" "),t("p",[n._v("bin目录下的可执行脚本www，")]),n._v(" "),t("blockquote",[t("p",[n._v("#! /usr/bin/env node")])]),n._v(" "),t("p",[n._v("package.json中配置：")]),n._v(" "),t("blockquote",[t("p",[n._v('"bin": {\n"vee-cli": "./bin/www"\n},')])]),n._v(" "),t("p",[n._v("其可对全局下的命令进行分发，由"),t("code",[n._v("npm link")]),n._v("进行连接，如果权限不够可能需要使用sudo等，具体的爬坑可以参考这篇文章"),t("a",{attrs:{href:"https://www.cnblogs.com/leaf526/p/3622212.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("npm link没有效果的问题"),t("OutboundLink")],1),n._v('，在入口文件中可先打印一个命令"hello vee"进行测试，如图所示。')]),n._v(" "),t("h4",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[n._v("#")]),n._v(" 命令")]),n._v(" "),t("p",[t("img",{attrs:{src:"/tech/front/cli20200701/cli03.jpeg",alt:"图片"}})]),n._v(" "),t("p",[n._v("完成测试后，就是命令分发的主要逻辑了，这里主要用到了commander的包，源码部分在下节中解读，mapAction主要是映射命令的行为，其中主要是alias、description、examples，然后就是每个行为的显示执行了，这里有一个关键代码是"),t("code",[n._v("require(path.resolve(__dirname,action))(...process.argv.slice(3))")]),n._v("获取对应的文件名来进行解析，这样就可以把各个功能抽离到对应文件里去做具体的逻辑")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("const program = require('commander');\nconst { version } = require('./constants');\nconst path = require('path');\n\nconst mapAction = {\n    create: {\n        alias: 'c', \n        description: 'create a project', \n        examples: [\n            'vee-cli create <project-name>'\n        ],\n    },\n    config: {\n        alias: 'conf',\n        description: 'config project variable',\n        examples: [\n            'vee-cli config set <k> <v>',\n            'vee-cli config get <k>',\n        ],\n    },\n    '*': { \n        alias: '',\n        description: 'command not found',\n        examples: [],\n    }\n}\n\n//可以使用Reflect，好处是可以遍历Symbol\nObject.keys(mapAction).forEach((action) => {\n    program.command(action) \n        .alias(mapAction[action].alias) \n        .description(mapAction[action].description) \n        .action(() => {\n            if (action === '*') { \n                console.log(mapAction[action].description)\n            } else {\n                console.log(action);\n                require(path.resolve(__dirname,action))(...process.argv.slice(3))\n            }\n        })\n});\n\nprogram.on('--help',()=>{\n    console.log('\\r\\nExamples:');\n    Object.keys(mapAction).forEach((action)=>{\n        mapAction[action].examples.forEach(example=>{\n            console.log('   '+example)\n        })\n    })\n});\n\nprogram.version(version).parse(process.argv);\n")])])]),t("h3",{attrs:{id:"相关包源码分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关包源码分析"}},[n._v("#")]),n._v(" 相关包源码分析")]),n._v(" "),t("p",[t("img",{attrs:{src:"/tech/front/cli20200701/cli04.png",alt:"图片"}})]),n._v(" "),t("p",[n._v("commander是tj大佬写的，包主要依赖着event、child_process、fs、path、Error五个node核心模块，其中EventEmitter的实现更是前端面试中常见的笔试题，具体请看"),t("a",{attrs:{href:"https://vleedesigntheory.github.io/interview/interview-program.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("编程题-方法库-实现EventEmitter"),t("OutboundLink")],1),n._v("，因此搭建脚手架，node是基础！")]),n._v(" "),t("p",[t("img",{attrs:{src:"/tech/front/cli20200701/cli05.jpeg",alt:"图片"}})]),n._v(" "),t("ul",[t("li",[n._v("依赖")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("const EventEmitter = require('events').EventEmitter; // 事件触发与事件监听器功能的封装\nconst spawn = require('child_process').spawn; // 利用给定的命令以及参数执行一个新的进程\nconst path = require('path'); // 路径模块\nconst fs = require('fs'); // 文件模块\n")])])]),t("ul",[t("li",[n._v("Option类")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Option {\n  constructor(flags, description) {\n    this.flags = flags;\n    this.required = flags.indexOf('<') >= 0; \n    this.optional = flags.indexOf('[') >= 0; \n    this.mandatory = false; \n    this.negate = flags.indexOf('-no-') !== -1;\n    const flagParts = flags.split(/[ ,|]+/);\n    if (flagParts.length > 1 && !/^[[<]/.test(flagParts[1])) this.short = flagParts.shift();\n    this.long = flagParts.shift();\n    this.description = description || '';\n    this.defaultValue = undefined;\n  }\n\n  name() {\n    return this.long.replace(/^--/, '');\n  };\n\n \n  attributeName() {\n    return camelcase(this.name().replace(/^no-/, ''));\n  };\n\n  is(arg) {\n    return this.short === arg || this.long === arg;\n  };\n}\n")])])]),t("ul",[t("li",[n._v("CommandError类")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class CommanderError extends Error {\n  constructor(exitCode, code, message) {\n    super(message);\n    // properly capture stack trace in Node.js\n    Error.captureStackTrace(this, this.constructor);\n    this.name = this.constructor.name;\n    this.code = code;\n    this.exitCode = exitCode;\n    this.nestedError = undefined;\n  }\n}\n")])])]),t("ul",[t("li",[n._v("Command类")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Command extends EventEmitter {\n\n  constructor(name) {\n    super();\n    this.commands = [];\n    this.options = [];\n    this.parent = null;\n    this._allowUnknownOption = false;\n    this._args = [];\n    this.rawArgs = null;\n    this._scriptPath = null;\n    this._name = name || '';\n    this._optionValues = {};\n    this._storeOptionsAsProperties = true; \n    this._passCommandToAction = true;\n    this._actionResults = [];\n    this._actionHandler = null;\n    this._executableHandler = false;\n    this._executableFile = null; \n    this._defaultCommandName = null;\n    this._exitCallback = null;\n    this._aliases = [];\n\n    this._hidden = false;\n    this._helpFlags = '-h, --help';\n    this._helpDescription = 'display help for command';\n    this._helpShortFlag = '-h';\n    this._helpLongFlag = '--help';\n    this._hasImplicitHelpCommand = undefined; \n    this._helpCommandName = 'help';\n    this._helpCommandnameAndArgs = 'help [command]';\n    this._helpCommandDescription = 'display help for command';\n  }\n\n  command(nameAndArgs, actionOptsOrExecDesc, execOpts) {\n    let desc = actionOptsOrExecDesc;\n    let opts = execOpts;\n    if (typeof desc === 'object' && desc !== null) {\n      opts = desc;\n      desc = null;\n    }\n    opts = opts || {};\n    const args = nameAndArgs.split(/ +/);\n    const cmd = this.createCommand(args.shift());\n\n    if (desc) {\n      cmd.description(desc);\n      cmd._executableHandler = true;\n    }\n    if (opts.isDefault) this._defaultCommandName = cmd._name;\n\n    cmd._hidden = !!(opts.noHelp || opts.hidden);\n    cmd._helpFlags = this._helpFlags;\n    cmd._helpDescription = this._helpDescription;\n    cmd._helpShortFlag = this._helpShortFlag;\n    cmd._helpLongFlag = this._helpLongFlag;\n    cmd._helpCommandName = this._helpCommandName;\n    cmd._helpCommandnameAndArgs = this._helpCommandnameAndArgs;\n    cmd._helpCommandDescription = this._helpCommandDescription;\n    cmd._exitCallback = this._exitCallback;\n    cmd._storeOptionsAsProperties = this._storeOptionsAsProperties;\n    cmd._passCommandToAction = this._passCommandToAction;\n\n    cmd._executableFile = opts.executableFile || null; \n    this.commands.push(cmd);\n    cmd._parseExpectedArgs(args);\n    cmd.parent = this;\n\n    if (desc) return this;\n    return cmd;\n  };\n\n\n  createCommand(name) {\n    return new Command(name);\n  };\n\n  addCommand(cmd, opts) {\n    if (!cmd._name) throw new Error('Command passed to .addCommand() must have a name');\n\n    function checkExplicitNames(commandArray) {\n      commandArray.forEach((cmd) => {\n        if (cmd._executableHandler && !cmd._executableFile) {\n          throw new Error(`Must specify executableFile for deeply nested executable: ${cmd.name()}`);\n        }\n        checkExplicitNames(cmd.commands);\n      });\n    }\n    checkExplicitNames(cmd.commands);\n\n    opts = opts || {};\n    if (opts.isDefault) this._defaultCommandName = cmd._name;\n    if (opts.noHelp || opts.hidden) cmd._hidden = true; \n    this.commands.push(cmd);\n    cmd.parent = this;\n    return this;\n  };\n\n  arguments(desc) {\n    return this._parseExpectedArgs(desc.split(/ +/));\n  };\n\n  addHelpCommand(enableOrNameAndArgs, description) {\n    if (enableOrNameAndArgs === false) {\n      this._hasImplicitHelpCommand = false;\n    } else {\n      this._hasImplicitHelpCommand = true;\n      if (typeof enableOrNameAndArgs === 'string') {\n        this._helpCommandName = enableOrNameAndArgs.split(' ')[0];\n        this._helpCommandnameAndArgs = enableOrNameAndArgs;\n      }\n      this._helpCommandDescription = description || this._helpCommandDescription;\n    }\n    return this;\n  };\n\n  _lazyHasImplicitHelpCommand() {\n    if (this._hasImplicitHelpCommand === undefined) {\n      this._hasImplicitHelpCommand = this.commands.length && !this._actionHandler && !this._findCommand('help');\n    }\n    return this._hasImplicitHelpCommand;\n  };\n\n  _parseExpectedArgs(args) {\n    if (!args.length) return;\n    args.forEach((arg) => {\n      const argDetails = {\n        required: false,\n        name: '',\n        variadic: false\n      };\n\n      switch (arg[0]) {\n        case '<':\n          argDetails.required = true;\n          argDetails.name = arg.slice(1, -1);\n          break;\n        case '[':\n          argDetails.name = arg.slice(1, -1);\n          break;\n      }\n\n      if (argDetails.name.length > 3 && argDetails.name.slice(-3) === '...') {\n        argDetails.variadic = true;\n        argDetails.name = argDetails.name.slice(0, -3);\n      }\n      if (argDetails.name) {\n        this._args.push(argDetails);\n      }\n    });\n    this._args.forEach((arg, i) => {\n      if (arg.variadic && i < this._args.length - 1) {\n        throw new Error(`only the last argument can be variadic '${arg.name}'`);\n      }\n    });\n    return this;\n  };\n\n  exitOverride(fn) {\n    if (fn) {\n      this._exitCallback = fn;\n    } else {\n      this._exitCallback = (err) => {\n        if (err.code !== 'commander.executeSubCommandAsync') {\n          throw err;\n        } else {\n        }\n      };\n    }\n    return this;\n  };\n\n  _exit(exitCode, code, message) {\n    if (this._exitCallback) {\n      this._exitCallback(new CommanderError(exitCode, code, message));\n    }\n    process.exit(exitCode);\n  };\n\n  action(fn) {\n    const listener = (args) => {\n      const expectedArgsCount = this._args.length;\n      const actionArgs = args.slice(0, expectedArgsCount);\n      if (this._passCommandToAction) {\n        actionArgs[expectedArgsCount] = this;\n      } else {\n        actionArgs[expectedArgsCount] = this.opts();\n      }\n      if (args.length > expectedArgsCount) {\n        actionArgs.push(args.slice(expectedArgsCount));\n      }\n\n      const actionResult = fn.apply(this, actionArgs);\n      let rootCommand = this;\n      while (rootCommand.parent) {\n        rootCommand = rootCommand.parent;\n      }\n      rootCommand._actionResults.push(actionResult);\n    };\n    this._actionHandler = listener;\n    return this;\n  };\n\n  _optionEx(config, flags, description, fn, defaultValue) {\n    const option = new Option(flags, description);\n    const oname = option.name();\n    const name = option.attributeName();\n    option.mandatory = !!config.mandatory;\n\n    if (typeof fn !== 'function') {\n      if (fn instanceof RegExp) {\n        const regex = fn;\n        fn = (val, def) => {\n          const m = regex.exec(val);\n          return m ? m[0] : def;\n        };\n      } else {\n        defaultValue = fn;\n        fn = null;\n      }\n    }\n\n    if (option.negate || option.optional || option.required || typeof defaultValue === 'boolean') {\n      if (option.negate) {\n        const positiveLongFlag = option.long.replace(/^--no-/, '--');\n        defaultValue = this._findOption(positiveLongFlag) ? this._getOptionValue(name) : true;\n      }\n      if (defaultValue !== undefined) {\n        this._setOptionValue(name, defaultValue);\n        option.defaultValue = defaultValue;\n      }\n    }\n\n    this.options.push(option);\n\n    this.on('option:' + oname, (val) => {\n      if (val !== null && fn) {\n        val = fn(val, this._getOptionValue(name) === undefined ? defaultValue : this._getOptionValue(name));\n      }\n\n      if (typeof this._getOptionValue(name) === 'boolean' || typeof this._getOptionValue(name) === 'undefined') {\n        if (val == null) {\n          this._setOptionValue(name, option.negate\n            ? false\n            : defaultValue || true);\n        } else {\n          this._setOptionValue(name, val);\n        }\n      } else if (val !== null) {\n        this._setOptionValue(name, option.negate ? false : val);\n      }\n    });\n\n    return this;\n  };\n\n  option(flags, description, fn, defaultValue) {\n    return this._optionEx({}, flags, description, fn, defaultValue);\n  };\n\n  requiredOption(flags, description, fn, defaultValue) {\n    return this._optionEx({ mandatory: true }, flags, description, fn, defaultValue);\n  };\n\n  allowUnknownOption(arg) {\n    this._allowUnknownOption = (arg === undefined) || arg;\n    return this;\n  };\n\n  storeOptionsAsProperties(value) {\n    this._storeOptionsAsProperties = (value === undefined) || value;\n    if (this.options.length) {\n      throw new Error('call .storeOptionsAsProperties() before adding options');\n    }\n    return this;\n  };\n\n  passCommandToAction(value) {\n    this._passCommandToAction = (value === undefined) || value;\n    return this;\n  };\n\n  _setOptionValue(key, value) {\n    if (this._storeOptionsAsProperties) {\n      this[key] = value;\n    } else {\n      this._optionValues[key] = value;\n    }\n  };\n\n  _getOptionValue(key) {\n    if (this._storeOptionsAsProperties) {\n      return this[key];\n    }\n    return this._optionValues[key];\n  };\n\n  parse(argv, parseOptions) {\n    if (argv !== undefined && !Array.isArray(argv)) {\n      throw new Error('first parameter to parse must be array or undefined');\n    }\n    parseOptions = parseOptions || {};\n\n    if (argv === undefined) {\n      argv = process.argv;\n      if (process.versions && process.versions.electron) {\n        parseOptions.from = 'electron';\n      }\n    }\n    this.rawArgs = argv.slice();\n\n    let userArgs;\n    switch (parseOptions.from) {\n      case undefined:\n      case 'node':\n        this._scriptPath = argv[1];\n        userArgs = argv.slice(2);\n        break;\n      case 'electron':\n        if (process.defaultApp) {\n          this._scriptPath = argv[1];\n          userArgs = argv.slice(2);\n        } else {\n          userArgs = argv.slice(1);\n        }\n        break;\n      case 'user':\n        userArgs = argv.slice(0);\n        break;\n      default:\n        throw new Error(`unexpected parse option { from: '${parseOptions.from}' }`);\n    }\n    if (!this._scriptPath && process.mainModule) {\n      this._scriptPath = process.mainModule.filename;\n    }\n\n    this._name = this._name || (this._scriptPath && path.basename(this._scriptPath, path.extname(this._scriptPath)));\n\n    this._parseCommand([], userArgs);\n\n    return this;\n  };\n\n  parseAsync(argv, parseOptions) {\n    this.parse(argv, parseOptions);\n    return Promise.all(this._actionResults).then(() => this);\n  };\n\n  _executeSubCommand(subcommand, args) {\n    args = args.slice();\n    let launchWithNode = false;\n    const sourceExt = ['.js', '.ts', '.mjs'];\n\n    this._checkForMissingMandatoryOptions();\n\n    const scriptPath = this._scriptPath;\n\n    let baseDir;\n    try {\n      const resolvedLink = fs.realpathSync(scriptPath);\n      baseDir = path.dirname(resolvedLink);\n    } catch (e) {\n      baseDir = '.'; \n    }\n\n    let bin = path.basename(scriptPath, path.extname(scriptPath)) + '-' + subcommand._name;\n    if (subcommand._executableFile) {\n      bin = subcommand._executableFile;\n    }\n\n    const localBin = path.join(baseDir, bin);\n    if (fs.existsSync(localBin)) {\n      bin = localBin;\n    } else {\n      sourceExt.forEach((ext) => {\n        if (fs.existsSync(`${localBin}${ext}`)) {\n          bin = `${localBin}${ext}`;\n        }\n      });\n    }\n    launchWithNode = sourceExt.includes(path.extname(bin));\n\n    let proc;\n    if (process.platform !== 'win32') {\n      if (launchWithNode) {\n        args.unshift(bin);\n        args = incrementNodeInspectorPort(process.execArgv).concat(args);\n\n        proc = spawn(process.argv[0], args, { stdio: 'inherit' });\n      } else {\n        proc = spawn(bin, args, { stdio: 'inherit' });\n      }\n    } else {\n      args.unshift(bin);\n      args = incrementNodeInspectorPort(process.execArgv).concat(args);\n      proc = spawn(process.execPath, args, { stdio: 'inherit' });\n    }\n\n    const signals = ['SIGUSR1', 'SIGUSR2', 'SIGTERM', 'SIGINT', 'SIGHUP'];\n    signals.forEach((signal) => {\n      process.on(signal, () => {\n        if (proc.killed === false && proc.exitCode === null) {\n          proc.kill(signal);\n        }\n      });\n    });\n\n    const exitCallback = this._exitCallback;\n    if (!exitCallback) {\n      proc.on('close', process.exit.bind(process));\n    } else {\n      proc.on('close', () => {\n        exitCallback(new CommanderError(process.exitCode || 0, 'commander.executeSubCommandAsync', '(close)'));\n      });\n    }\n    proc.on('error', (err) => {\n      if (err.code === 'ENOENT') {\n        const executableMissing = `'${bin}' does not exist\n - if '${subcommand._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead\n - if the default executable name is not suitable, use the executableFile option to supply a custom name`;\n        throw new Error(executableMissing);\n      } else if (err.code === 'EACCES') {\n        throw new Error(`'${bin}' not executable`);\n      }\n      if (!exitCallback) {\n        process.exit(1);\n      } else {\n        const wrappedError = new CommanderError(1, 'commander.executeSubCommandAsync', '(error)');\n        wrappedError.nestedError = err;\n        exitCallback(wrappedError);\n      }\n    });\n\n    this.runningCommand = proc;\n  };\n\n  _dispatchSubcommand(commandName, operands, unknown) {\n    const subCommand = this._findCommand(commandName);\n    if (!subCommand) this._helpAndError();\n\n    if (subCommand._executableHandler) {\n      this._executeSubCommand(subCommand, operands.concat(unknown));\n    } else {\n      subCommand._parseCommand(operands, unknown);\n    }\n  };\n\n  _parseCommand(operands, unknown) {\n    const parsed = this.parseOptions(unknown);\n    operands = operands.concat(parsed.operands);\n    unknown = parsed.unknown;\n    this.args = operands.concat(unknown);\n\n    if (operands && this._findCommand(operands[0])) {\n      this._dispatchSubcommand(operands[0], operands.slice(1), unknown);\n    } else if (this._lazyHasImplicitHelpCommand() && operands[0] === this._helpCommandName) {\n      if (operands.length === 1) {\n        this.help();\n      } else {\n        this._dispatchSubcommand(operands[1], [], [this._helpLongFlag]);\n      }\n    } else if (this._defaultCommandName) {\n      outputHelpIfRequested(this, unknown); \n      this._dispatchSubcommand(this._defaultCommandName, operands, unknown);\n    } else {\n      if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) {\n        this._helpAndError();\n      }\n\n      outputHelpIfRequested(this, parsed.unknown);\n      this._checkForMissingMandatoryOptions();\n      if (parsed.unknown.length > 0) {\n        this.unknownOption(parsed.unknown[0]);\n      }\n\n      if (this._actionHandler) {\n        const args = this.args.slice();\n        this._args.forEach((arg, i) => {\n          if (arg.required && args[i] == null) {\n            this.missingArgument(arg.name);\n          } else if (arg.variadic) {\n            args[i] = args.splice(i);\n          }\n        });\n\n        this._actionHandler(args);\n        this.emit('command:' + this.name(), operands, unknown);\n      } else if (operands.length) {\n        if (this._findCommand('*')) {\n          this._dispatchSubcommand('*', operands, unknown);\n        } else if (this.listenerCount('command:*')) {\n          this.emit('command:*', operands, unknown);\n        } else if (this.commands.length) {\n          this.unknownCommand();\n        }\n      } else if (this.commands.length) {\n        this._helpAndError();\n      } else {\n      }\n    }\n  };\n\n  _findCommand(name) {\n    if (!name) return undefined;\n    return this.commands.find(cmd => cmd._name === name || cmd._aliases.includes(name));\n  };\n\n  _findOption(arg) {\n    return this.options.find(option => option.is(arg));\n  };\n\n  _checkForMissingMandatoryOptions() {\n    for (let cmd = this; cmd; cmd = cmd.parent) {\n      cmd.options.forEach((anOption) => {\n        if (anOption.mandatory && (cmd._getOptionValue(anOption.attributeName()) === undefined)) {\n          cmd.missingMandatoryOptionValue(anOption);\n        }\n      });\n    }\n  };\n\n  parseOptions(argv) {\n    const operands = []; \n    const unknown = []; \n    let dest = operands;\n    const args = argv.slice();\n\n    function maybeOption(arg) {\n      return arg.length > 1 && arg[0] === '-';\n    }\n\n    while (args.length) {\n      const arg = args.shift();\n\n      if (arg === '--') {\n        if (dest === unknown) dest.push(arg);\n        dest.push(...args);\n        break;\n      }\n\n      if (maybeOption(arg)) {\n        const option = this._findOption(arg);\n        if (option) {\n          if (option.required) {\n            const value = args.shift();\n            if (value === undefined) this.optionMissingArgument(option);\n            this.emit(`option:${option.name()}`, value);\n          } else if (option.optional) {\n            let value = null;\n            if (args.length > 0 && !maybeOption(args[0])) {\n              value = args.shift();\n            }\n            this.emit(`option:${option.name()}`, value);\n          } else { \n            this.emit(`option:${option.name()}`);\n          }\n          continue;\n        }\n      }\n\n      if (arg.length > 2 && arg[0] === '-' && arg[1] !== '-') {\n        const option = this._findOption(`-${arg[1]}`);\n        if (option) {\n          if (option.required || option.optional) {\n            this.emit(`option:${option.name()}`, arg.slice(2));\n          } else {\n            this.emit(`option:${option.name()}`);\n            args.unshift(`-${arg.slice(2)}`);\n          }\n          continue;\n        }\n      }\n\n      if (/^--[^=]+=/.test(arg)) {\n        const index = arg.indexOf('=');\n        const option = this._findOption(arg.slice(0, index));\n        if (option && (option.required || option.optional)) {\n          this.emit(`option:${option.name()}`, arg.slice(index + 1));\n          continue;\n        }\n      }\n\n      if (arg.length > 1 && arg[0] === '-') {\n        dest = unknown;\n      }\n\n      dest.push(arg);\n    }\n\n    return { operands, unknown };\n  };\n\n  opts() {\n    if (this._storeOptionsAsProperties) {\n      const result = {};\n      const len = this.options.length;\n\n      for (let i = 0; i < len; i++) {\n        const key = this.options[i].attributeName();\n        result[key] = key === this._versionOptionName ? this._version : this[key];\n      }\n      return result;\n    }\n\n    return this._optionValues;\n  };\n\n  missingArgument(name) {\n    const message = `error: missing required argument '${name}'`;\n    console.error(message);\n    this._exit(1, 'commander.missingArgument', message);\n  };\n\n  optionMissingArgument(option, flag) {\n    let message;\n    if (flag) {\n      message = `error: option '${option.flags}' argument missing, got '${flag}'`;\n    } else {\n      message = `error: option '${option.flags}' argument missing`;\n    }\n    console.error(message);\n    this._exit(1, 'commander.optionMissingArgument', message);\n  };\n\n  missingMandatoryOptionValue(option) {\n    const message = `error: required option '${option.flags}' not specified`;\n    console.error(message);\n    this._exit(1, 'commander.missingMandatoryOptionValue', message);\n  };\n\n  unknownOption(flag) {\n    if (this._allowUnknownOption) return;\n    const message = `error: unknown option '${flag}'`;\n    console.error(message);\n    this._exit(1, 'commander.unknownOption', message);\n  };\n\n  unknownCommand() {\n    const partCommands = [this.name()];\n    for (let parentCmd = this.parent; parentCmd; parentCmd = parentCmd.parent) {\n      partCommands.unshift(parentCmd.name());\n    }\n    const fullCommand = partCommands.join(' ');\n    const message = `error: unknown command '${this.args[0]}'. See '${fullCommand} ${this._helpLongFlag}'.`;\n    console.error(message);\n    this._exit(1, 'commander.unknownCommand', message);\n  };\n\n  version(str, flags, description) {\n    if (str === undefined) return this._version;\n    this._version = str;\n    flags = flags || '-V, --version';\n    description = description || 'output the version number';\n    const versionOption = new Option(flags, description);\n    this._versionOptionName = versionOption.long.substr(2) || 'version';\n    this.options.push(versionOption);\n    this.on('option:' + this._versionOptionName, () => {\n      process.stdout.write(str + '\\n');\n      this._exit(0, 'commander.version', str);\n    });\n    return this;\n  };\n\n  description(str, argsDescription) {\n    if (str === undefined && argsDescription === undefined) return this._description;\n    this._description = str;\n    this._argsDescription = argsDescription;\n    return this;\n  };\n\n  alias(alias) {\n    if (alias === undefined) return this._aliases[0];\n    let command = this;\n    if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) {\n      command = this.commands[this.commands.length - 1];\n    }\n\n    if (alias === command._name) throw new Error('Command alias can\\'t be the same as its name');\n\n    command._aliases.push(alias);\n    return this;\n  };\n\n  aliases(aliases) {\n    if (aliases === undefined) return this._aliases;\n\n    aliases.forEach((alias) => this.alias(alias));\n    return this;\n  };\n\n  usage(str) {\n    if (str === undefined) {\n      if (this._usage) return this._usage;\n\n      const args = this._args.map((arg) => {\n        return humanReadableArgName(arg);\n      });\n      return '[options]' +\n        (this.commands.length ? ' [command]' : '') +\n        (this._args.length ? ' ' + args.join(' ') : '');\n    }\n\n    this._usage = str;\n    return this;\n  };\n\n  name(str) {\n    if (str === undefined) return this._name;\n    this._name = str;\n    return this;\n  };\n\n  prepareCommands() {\n    const commandDetails = this.commands.filter((cmd) => {\n      return !cmd._hidden;\n    }).map((cmd) => {\n      const args = cmd._args.map((arg) => {\n        return humanReadableArgName(arg);\n      }).join(' ');\n\n      return [\n        cmd._name +\n          (cmd._aliases[0] ? '|' + cmd._aliases[0] : '') +\n          (cmd.options.length ? ' [options]' : '') +\n          (args ? ' ' + args : ''),\n        cmd._description\n      ];\n    });\n\n    if (this._lazyHasImplicitHelpCommand()) {\n      commandDetails.push([this._helpCommandnameAndArgs, this._helpCommandDescription]);\n    }\n    return commandDetails;\n  };\n\n  largestCommandLength() {\n    const commands = this.prepareCommands();\n    return commands.reduce((max, command) => {\n      return Math.max(max, command[0].length);\n    }, 0);\n  };\n\n  largestOptionLength() {\n    const options = [].slice.call(this.options);\n    options.push({\n      flags: this._helpFlags\n    });\n\n    return options.reduce((max, option) => {\n      return Math.max(max, option.flags.length);\n    }, 0);\n  };\n\n  largestArgLength() {\n    return this._args.reduce((max, arg) => {\n      return Math.max(max, arg.name.length);\n    }, 0);\n  };\n\n  padWidth() {\n    let width = this.largestOptionLength();\n    if (this._argsDescription && this._args.length) {\n      if (this.largestArgLength() > width) {\n        width = this.largestArgLength();\n      }\n    }\n\n    if (this.commands && this.commands.length) {\n      if (this.largestCommandLength() > width) {\n        width = this.largestCommandLength();\n      }\n    }\n\n    return width;\n  };\n\n  optionHelp() {\n    const width = this.padWidth();\n    const columns = process.stdout.columns || 80;\n    const descriptionWidth = columns - width - 4;\n    function padOptionDetails(flags, description) {\n      return pad(flags, width) + '  ' + optionalWrap(description, descriptionWidth, width + 2);\n    };\n\n    const help = this.options.map((option) => {\n      const fullDesc = option.description +\n        ((!option.negate && option.defaultValue !== undefined) ? ' (default: ' + JSON.stringify(option.defaultValue) + ')' : '');\n      return padOptionDetails(option.flags, fullDesc);\n    });\n\n    const showShortHelpFlag = this._helpShortFlag && !this._findOption(this._helpShortFlag);\n    const showLongHelpFlag = !this._findOption(this._helpLongFlag);\n    if (showShortHelpFlag || showLongHelpFlag) {\n      let helpFlags = this._helpFlags;\n      if (!showShortHelpFlag) {\n        helpFlags = this._helpLongFlag;\n      } else if (!showLongHelpFlag) {\n        helpFlags = this._helpShortFlag;\n      }\n      help.push(padOptionDetails(helpFlags, this._helpDescription));\n    }\n\n    return help.join('\\n');\n  };\n\n  commandHelp() {\n    if (!this.commands.length && !this._lazyHasImplicitHelpCommand()) return '';\n\n    const commands = this.prepareCommands();\n    const width = this.padWidth();\n\n    const columns = process.stdout.columns || 80;\n    const descriptionWidth = columns - width - 4;\n\n    return [\n      'Commands:',\n      commands.map((cmd) => {\n        const desc = cmd[1] ? '  ' + cmd[1] : '';\n        return (desc ? pad(cmd[0], width) : cmd[0]) + optionalWrap(desc, descriptionWidth, width + 2);\n      }).join('\\n').replace(/^/gm, '  '),\n      ''\n    ].join('\\n');\n  };\n\n  helpInformation() {\n    let desc = [];\n    if (this._description) {\n      desc = [\n        this._description,\n        ''\n      ];\n\n      const argsDescription = this._argsDescription;\n      if (argsDescription && this._args.length) {\n        const width = this.padWidth();\n        const columns = process.stdout.columns || 80;\n        const descriptionWidth = columns - width - 5;\n        desc.push('Arguments:');\n        desc.push('');\n        this._args.forEach((arg) => {\n          desc.push('  ' + pad(arg.name, width) + '  ' + wrap(argsDescription[arg.name], descriptionWidth, width + 4));\n        });\n        desc.push('');\n      }\n    }\n\n    let cmdName = this._name;\n    if (this._aliases[0]) {\n      cmdName = cmdName + '|' + this._aliases[0];\n    }\n    let parentCmdNames = '';\n    for (let parentCmd = this.parent; parentCmd; parentCmd = parentCmd.parent) {\n      parentCmdNames = parentCmd.name() + ' ' + parentCmdNames;\n    }\n    const usage = [\n      'Usage: ' + parentCmdNames + cmdName + ' ' + this.usage(),\n      ''\n    ];\n\n    let cmds = [];\n    const commandHelp = this.commandHelp();\n    if (commandHelp) cmds = [commandHelp];\n\n    const options = [\n      'Options:',\n      '' + this.optionHelp().replace(/^/gm, '  '),\n      ''\n    ];\n\n    return usage\n      .concat(desc)\n      .concat(options)\n      .concat(cmds)\n      .join('\\n');\n  };\n\n  outputHelp(cb) {\n    if (!cb) {\n      cb = (passthru) => {\n        return passthru;\n      };\n    }\n    const cbOutput = cb(this.helpInformation());\n    if (typeof cbOutput !== 'string' && !Buffer.isBuffer(cbOutput)) {\n      throw new Error('outputHelp callback must return a string or a Buffer');\n    }\n    process.stdout.write(cbOutput);\n    this.emit(this._helpLongFlag);\n  };\n\n  helpOption(flags, description) {\n    this._helpFlags = flags || this._helpFlags;\n    this._helpDescription = description || this._helpDescription;\n\n    const splitFlags = this._helpFlags.split(/[ ,|]+/);\n\n    this._helpShortFlag = undefined;\n    if (splitFlags.length > 1) this._helpShortFlag = splitFlags.shift();\n\n    this._helpLongFlag = splitFlags.shift();\n\n    return this;\n  };\n\n  help(cb) {\n    this.outputHelp(cb);\n    this._exit(process.exitCode || 0, 'commander.help', '(outputHelp)');\n  };\n\n  _helpAndError() {\n    this.outputHelp();\n    this._exit(1, 'commander.help', '(outputHelp)');\n  };\n};\n")])])]),t("ul",[t("li",[n._v("导出及函数方法")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("exports = module.exports = new Command();\nexports.program = exports; \nexports.Command = Command;\nexports.Option = Option;\nexports.CommanderError = CommanderError;\n\nfunction camelcase(flag) {\n  return flag.split('-').reduce((str, word) => {\n    return str + word[0].toUpperCase() + word.slice(1);\n  });\n}\n\nfunction pad(str, width) {\n  const len = Math.max(0, width - str.length);\n  return str + Array(len + 1).join(' ');\n}\n\nfunction wrap(str, width, indent) {\n  const regex = new RegExp('.{1,' + (width - 1) + '}([\\\\s\\u200B]|$)|[^\\\\s\\u200B]+?([\\\\s\\u200B]|$)', 'g');\n  const lines = str.match(regex) || [];\n  return lines.map((line, i) => {\n    if (line.slice(-1) === '\\n') {\n      line = line.slice(0, line.length - 1);\n    }\n    return ((i > 0 && indent) ? Array(indent + 1).join(' ') : '') + line.trimRight();\n  }).join('\\n');\n}\n\nfunction optionalWrap(str, width, indent) {\n  if (str.match(/[\\n]\\s+/)) return str;\n  const minWidth = 40;\n  if (width < minWidth) return str;\n  return wrap(str, width, indent);\n}\n\nfunction outputHelpIfRequested(cmd, args) {\n  const helpOption = args.find(arg => arg === cmd._helpLongFlag || arg === cmd._helpShortFlag);\n  if (helpOption) {\n    cmd.outputHelp();\n    cmd._exit(0, 'commander.helpDisplayed', '(outputHelp)');\n  }\n}\n\nfunction humanReadableArgName(arg) {\n  const nameOutput = arg.name + (arg.variadic === true ? '...' : '');\n  return arg.required\n    ? '<' + nameOutput + '>'\n    : '[' + nameOutput + ']';\n}\n\nfunction incrementNodeInspectorPort(args) {\n  return args.map((arg) => {\n    let result = arg;\n    if (arg.indexOf('--inspect') === 0) {\n      let debugOption;\n      let debugHost = '127.0.0.1';\n      let debugPort = '9229';\n      let match;\n      if ((match = arg.match(/^(--inspect(-brk)?)$/)) !== null) {\n        debugOption = match[1];\n      } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) {\n        debugOption = match[1];\n        if (/^\\d+$/.test(match[3])) {\n          debugPort = match[3];\n        } else {\n          debugHost = match[3];\n        }\n      } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+):(\\d+)$/)) !== null) {\n        debugOption = match[1];\n        debugHost = match[3];\n        debugPort = match[4];\n      }\n\n      if (debugOption && debugPort !== '0') {\n        result = `${debugOption}=${debugHost}:${parseInt(debugPort) + 1}`;\n      }\n    }\n    return result;\n  });\n}\n")])])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),t("p",[n._v("本篇主要描述的是自主搭建脚手架的基本配置以及基本命令的配置上，具体的各种命令配置后事如何，且听下回分解")]),n._v(" "),t("p",[n._v("未完待续...")]),n._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[n._v("#")]),n._v(" 参考")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[n._v("vue-cli官网"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[n._v("nodejs官网"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/tj/commander.js",target:"_blank",rel:"noopener noreferrer"}},[n._v("commander.js源码"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/schifred/article/details/84810273",target:"_blank",rel:"noopener noreferrer"}},[n._v("commander源码解读"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/soulwyb/article/details/86767220",target:"_blank",rel:"noopener noreferrer"}},[n._v("Node.js中spawn与exec的异同比较"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);