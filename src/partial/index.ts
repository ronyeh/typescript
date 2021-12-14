interface Options {
    text?: string;
    glyph?: string;
    smooth?: boolean;
}

const opts: Options = {
    text: 'Hello',
    glhyp: 'gClef',
    smooth: true,
};

function doSomething(options: Options) {
    console.log(options.glyph);
}

doSomething(opts);
