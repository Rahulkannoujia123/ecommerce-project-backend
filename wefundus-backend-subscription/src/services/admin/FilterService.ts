import { ObjectId } from 'mongoose';
import { FilterInterface } from '../../interfaces/FilterInterface';
import CategoryModel from '../../models/CategoryModel';


import FilterModel from '../../models/FilterModel';
import { ApiFeatures } from '../../utils/ApiFeatures';
class FilterService {

    /**
     * @description create filter
     * @param categoryId 
     * @returns 
     */
    async createFilter(categoryId: string | ObjectId): Promise<void> {
        const isFilterExists = await FilterModel.exists({ categoryId });
        if (!isFilterExists) await FilterModel.create({ categoryId });
        return;
    }

    /**
     * 
     * @param categoryId 
     * @param data {
            colors?: string[],
            brand?: { _id: string | ObjectId, name: string },
            subcategory?: { _id: string | ObjectId, name: string },
            price?: number,
            attributeList?: { name: string, values: string[] }[]
        }
     * @returns void
     */

    async updateFilter(
        categoryId: string | ObjectId,
        data: {
            colors?: string[],
            brand?: { _id: string | ObjectId, name: string, slug: string },
            subcategory?: { _id: string | ObjectId, name: string, slug: string },
            price?: number,
            rating?: number,
            attributeList?: { name: string, values: string[] }[]
        }
    ): Promise<void> {
        const { colors, brand, subcategory, price, rating, attributeList } = data;

        let filter = await FilterModel.findOne({ categoryId }) as FilterInterface;
        if (!filter) {
            const category = await CategoryModel.findById(categoryId);
            filter = await FilterModel.create({ categoryId, categorySlug: category.slug })
        }

        if (colors) filter = await this.updateColors(filter, colors);
        if (brand) filter = await this.updateBrands(filter, brand);
        if (subcategory) filter = await this.updateSubcategories(filter, subcategory);
        if (price) filter = await this.updatePrice(filter, price);
        if (price) filter = await this.updateRatings(filter, rating);
        if (attributeList) filter = await this.updateAttributes(filter, attributeList);

        await filter.save();
        return;

    }

    /**
     * 
     * @param filter 
     * @param colors 
     * @returns updated filter
     */
    private async updateColors(filter: FilterInterface, colors: string[]): Promise<FilterInterface> {
        colors.forEach((color: string) => {
            if (!filter.color.list.includes(color)) {
                filter.color.list.push(color);
            }
        });

        return filter;
    }


    private async updateRatings(filter: FilterInterface, rating: number): Promise<FilterInterface> {
        const ratingAvg = Math.floor(rating);
        if (ratingAvg && !filter.rating.list.includes(ratingAvg)) filter.rating.list.push(ratingAvg);
        return filter;
    }



    /**
     * 
     * @param filter 
     * @param brand 
     * @returns updated filter
     */
    private async updateBrands(filter: FilterInterface, brand: { _id: ObjectId | string, name: string, slug: string }): Promise<FilterInterface> {
        if (!filter.brands.list.some((e: { _id: ObjectId | string, name: string }) => JSON.stringify(e._id) === JSON.stringify(brand._id)))
            filter.brands.list.push(brand);

        return filter;
    }

    /**
     * 
     * @param filter 
     * @param subcategory 
     * @returns updated filter
     */
    private async updateSubcategories(filter: FilterInterface, subcategory: { _id: ObjectId | string, name: string, slug: string }): Promise<FilterInterface> {
        if (!filter.subcategories.list.some((e: { _id: ObjectId | string, name: string }) => JSON.stringify(e._id) === JSON.stringify(subcategory._id)))
            filter.subcategories.list.push(subcategory);

        return filter;
    }

    /**
     * 
     * @param filter 
     * @param price 
     * @returns updated filter
     */
    private async updatePrice(filter: FilterInterface, price: number): Promise<FilterInterface> {
        if (filter.price.maxPrice < price) {
            filter.price.maxPrice = price;
        }
        if (filter.price.minPrice > price || filter.price.minPrice === 0) {
            filter.price.minPrice = price;
        }
        return filter;
    }

    /**
     * @param filter 
     * @param list 
     * @returns updated filter
     */

    private async updateAttributes(filter: FilterInterface, list: { name: string, values: string[] }[]): Promise<FilterInterface> {
        const attributes = filter.attributes.attributes;
        list.forEach((item: { name: string, values: string[] }) => {
            const attribute = attributes.find((e: { displayKey: string, queryKey: string, list: string[] }) => e.queryKey === item.name);

            if (attribute) {
                item.values.forEach((element: string) => {
                    if (!attribute.list.includes(element)) attribute.list.push(element);
                })
            }
            else {
                attributes.push({ displayKey: item.name, queryKey: item.name, list: [...item.values] });
            }
        })
        return filter;
    }


    /**
     * 
     * @param queryString 
     * @returns 
     */

    async list(
        queryString: any
    ): Promise<{ count: number, list: FilterInterface[] }> {
        const countQuery = FilterModel.find({});
        const countFeature = new ApiFeatures(countQuery, queryString)
            .getCount();
        const lisQuery = FilterModel.find({});
        const listFeature = new ApiFeatures(lisQuery, queryString)
            .fieldsLimiting()
            .pagination();
        const count = await countFeature.query;
        const list = await listFeature.query;

        return { list, count };
    }

}





export default new FilterService();