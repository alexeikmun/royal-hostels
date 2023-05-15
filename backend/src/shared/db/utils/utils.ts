export function generateRandomIdObjects(
    minObjects: number,
    maxObjects: number,
    minRange: number,
    maxRange: number,
): { id: number }[] {
    const randomNumber =
        Math.floor(Math.random() * (maxObjects - minObjects + 1)) + minObjects;
    // prettier-ignore
    const objects: { "id": number }[] = [];

    const usedIds: Set<number> = new Set();

    while (objects.length < randomNumber) {
        const rand =
            Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

        if (!usedIds.has(rand)) {
            objects.push({ id: rand });
            usedIds.add(rand);
        }
    }

    return objects;
}

export function getMinMaxIds(arr: { id: number; name: string }[]): {
    minId: number;
    maxId: number;
} {
    let minId = Infinity;
    let maxId = -Infinity;

    for (const obj of arr) {
        if (obj.id < minId) {
            minId = obj.id;
        }
        if (obj.id > maxId) {
            maxId = obj.id;
        }
    }

    return { minId, maxId };
}
