figma.showUI(__html__, {
    width: 512,
    height: 512,
    title: 'Simple Figma UI'
});

figma.ui.onmessage = (msg) => {
    if (msg.type === 'create-rectangles') {
        const nodes: SceneNode[] = [];
        for (let i = 0; i < msg.count; i++) {
            const rect = figma.createRectangle();
            rect.rotation = 45;
            rect.cornerSmoothing = 0.1;
            rect.effects = [
                {
                    blendMode: 'NORMAL',
                    showShadowBehindNode: true,
                    color: { r: 0, g: 0, b: 0, a: 1 },
                    offset: {
                        x: 8,
                        y: -8
                    },
                    radius: 7,
                    type: 'DROP_SHADOW',
                    visible: true,
                    spread: 24
                }
            ];
            rect.x = i * 150;
            rect.fills = [
                {
                    type: 'GRADIENT_LINEAR',
                    gradientStops: [
                        { color: { r: 1, g: 0, b: 0, a: 1 }, position: 0 },
                        { color: { r: 1, g: 1, b: 0, a: 1 }, position: 1 }
                    ],
                    gradientTransform: [
                        [0, 1, 0],
                        [0, 0, 1]
                    ]
                }
            ];
            figma.currentPage.appendChild(rect);
            nodes.push(rect);
        }
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
    }

    figma.closePlugin();
};
