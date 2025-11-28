import Errors, { HttpCode, Message } from '../lib/Errors';
import { View, ViewInput } from '../lib/types/view';
import ViewModel from '../schema/View.model';

/**
 * Service class for managing view-related operations.
 * Handles the business logic for tracking member views on various entities (products, restaurants, etc.).
 *
 * @class ViewService
 */
class ViewService {
  private readonly viewModel;

  /**
   * Creates an instance of ViewService.
   * Initializes the view model for database operations.
   *
   * @constructor
   */
  constructor() {
    this.viewModel = ViewModel;
  }

  /**
   * Checks if a view record already exists for a specific member and reference entity.
   * Used to prevent duplicate view entries and verify existing view relationships.
   *
   * @async
   * @public
   * @method checkViewExistance
   * @param {ViewInput} input - The view input containing member ID and reference entity ID
   * @param {string} input.memberId - The unique identifier of the member who viewed the entity
   * @param {string} input.viewRefId - The unique identifier of the entity being viewed (product, restaurant, etc.)
   * @returns {Promise<View>} A promise that resolves to the existing view record if found, or null if not found
   *
   * @example
   * const existingView = await viewService.checkViewExistance({
   *   memberId: '507f1f77bcf86cd799439011',
   *   viewRefId: '507f191e810c19729de860ea'
   * });
   */
  public async checkViewExistance(input: ViewInput): Promise<View> {
    const view = await this.viewModel
      .findOne({
        memberId: input.memberId,
        viewRefId: input.viewRefId,
      })
      .exec();

    return view;
  }

  /**
   * Inserts a new member view record into the database.
   * Creates a tracking entry when a member views a specific entity (product, restaurant, etc.).
   * This is used for analytics, popularity tracking, and personalization features.
   *
   * @async
   * @public
   * @method insertMemberView
   * @param {ViewInput} input - The view input data to be inserted
   * @param {string} input.memberId - The unique identifier of the member who is viewing the entity
   * @param {string} input.viewRefId - The unique identifier of the entity being viewed
   * @param {string} input.viewGroup - The category/group of the view (e.g., 'product', 'restaurant', 'article')
   * @returns {Promise<View>} A promise that resolves to the newly created view record
   * @throws {Errors} Throws a BAD_REQUEST error with CREATE_FAILED message if the database operation fails
   *
   * @example
   * try {
   *   const newView = await viewService.insertMemberView({
   *     memberId: '507f1f77bcf86cd799439011',
   *     viewRefId: '507f191e810c19729de860ea',
   *     viewGroup: 'product'
   *   });
   *   console.log('View recorded successfully:', newView);
   * } catch (error) {
   *   console.error('Failed to record view:', error);
   * }
   */
  public async insertMemberView(input: ViewInput): Promise<View> {
    try {
      return await this.viewModel.create(input);
    } catch (err) {
      console.error('Error inserting member view:', err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default ViewService;
