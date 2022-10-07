import axios from "axios";

export const loadMore = async (didMount, page, range, callback) => {
    const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/?userId=${didMount ? page : page + 1}`
    );
    const newArr = await res.data.map(async (el) => {
        const user = await axios.get(
            `https://jsonplaceholder.typicode.com/users?id=${el.userId}`
        );
        const image = await axios.get(
            `https://jsonplaceholder.typicode.com/photos?albumId=${user.data[0].id}`
        );
        return { ...el, userId: user.data[0], photo: image.data[0] };
    });

    const response = await Promise.all(newArr);

    if (didMount) {
        typeof callback === 'function' && callback(response.slice(0, range));
    } else {
        typeof callback === 'function' && callback((prev) => [...prev, ...response.slice(0, range)]);

    }
};