Title: Implementing CLI Subcommands with D programming language
Slug: cli-subcommands-dlang
Author: Aravinda VK
Date: 2019-07-28
Tags: dlang, d
Summary: Once "getopt" parses the flags, args will contain only remaining arguments(positional arguments).

Never heard of D Programming?

> D is a general-purpose programming language with static typing,
> systems-level access, and C-like syntax. With the D Programming
> Language, write fast, read fast, and run fast.
>
> Fast code, fast.
> [https://dlang.org](https://dlang.org)

Parsing command-line arguments is very easy using the "[getopt](https://dlang.org/phobos/std_getopt.html)" module
available in the standard library. In this blog, I am sharing my
experience about how I added subcommand support to my command-line
applications.

Below example shows a basic program which accepts `--name` or `-n`
argument.

```D
import std.stdio;
import std.getopt;

int main(string[] args)
{
    string name;
    auto opts = getopt(
        args,
        "n|name", "Your Name", &name
    );

    if (opts.helpWanted) {
        defaultGetoptPrinter("./mycli", opts.options);
        return 1;
    }

    writefln("Hello %s", name);
    return 0;
}
```

Once "getopt" parses the flags, args will contain only remaining
arguments(positional arguments). For example,

```D
import std.stdio;
import std.getopt;

int main(string[] args)
{
    string lastName;
    auto opts = getopt(
        args,
        "last-name", "Your Last Name", &lastName
    );

    if (opts.helpWanted || args.length != 2) {
        defaultGetoptPrinter("./mycli <name> [OPTIONS]", opts.options);
        return 1;
    }

    string name = args[1];

    writefln("Hello %s %s", name, lastName);
    return 0;
}
```

Now to handle sub-commands, we need to define multiple getopt. For
Example,

```d
import std.stdio;
import std.getopt;

const progHelp = "./mycli get|set [OPTIONS]";

int subcmdSet(string[] args)
{
    string name;
    bool isAdmin;
    auto opts = getopt(
        args,
        std.getopt.config.required,  // To make --name or -n as required field
        "n|name", "Name", &name,
        "admin", "Set Admin privileges", &isAdmin
    );

    if (opts.helpWanted)
    {
        defaultGetoptPrinter("./mycli set -n <Name>", opts.options);
        return 1;
    }
    // Subcommand implementation
    writef("Set name as %s", name);
    if (isAdmin)
        write("(admin)");
    writeln();
    return 0;
}

int subcmdGet(string[] args)
{
    string name;
    auto opts = getopt(
        args,
        std.getopt.config.required,
        "n|name", "Name", &name
    );

    if (opts.helpWanted)
    {
        defaultGetoptPrinter("./mycli get --n <Name>", opts.options);
        return 1;
    }
    // Subcommand implementation
    writefln("Name is %s", name);
    return 0;
}

int main(string[] args)
{
    auto subcmds = [
        "set": &subcmdSet,
        "get": &subcmdGet,
    ];

    if (args.length < 2)
    {
        writeln("subcommand not specified");
        defaultGetoptPrinter(progHelp, globalOpts.options);
        return 1;
    }

    auto func = (args[1] in subcmds);

    if (func is null)
    {
        writeln("Unknown sub-command");
        defaultGetoptPrinter(progHelp, globalOpts.options);
        return 1;
    }
    return (*func)(args);
}
```

If the program needs global flags which are applicable for all
sub-commands, then make sure to add global flags getopt before parsing
sub-commands. Also, add `std.getopt.config.passThrough` to avoid
failing to parse flags related to sub-commands.

```d
struct globalFlags
{
    string logLevel = "INFO";
    bool debugEnabled;
}

globalFlags gflags;

int main(string[] args)
{
    auto globalOpts = getopt(
        args,
        std.getopt.config.passThrough,
        "l|log-level", "Log Level", &gflags.logLevel,
        "debug", "Debug mode", &gflags.debugEnabled
    );

    if (args.length < 2)
    {
        if (!globalOpts.helpWanted)
            writeln("subcommand not specified");

        defaultGetoptPrinter(progHelp, globalOpts.options);
        return 1;
    }

    // -h is already parsed during Global options parsing. Reinsert to args
    // So that subcommands will work as usual
    if (globalOpts.helpWanted)
        args ~= "-h";

    auto subcmds = [
        "set": &subcmdSet,
        "get": &subcmdGet,
    ];

    auto func = (args[1] in subcmds);

    if (func is null)
    {
        writeln("Unknown sub-command");
        defaultGetoptPrinter(progHelp, globalOpts.options);
        return 1;
    }
    return (*func)(args);
}
```

Notes:

- `getopt` errors can be handled by catching `GetoptException` and,
- Handle any datatype conversion errors by catching ConvException`.
- Positional arguments start with index 2(Example: `args[2]`)

That's it! Let me know if this blog post is useful.
